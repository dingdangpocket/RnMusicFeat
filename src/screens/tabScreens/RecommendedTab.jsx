/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
  Text,
  Easing,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const RecommendedTab = () => {
  const [refreshing, setRefreshing] = useState(false);
  const musicList = [
    {
      id: '0',
      title: 'Jordann - Dehors',
      artist: 'Jordann',
      album: 'Dehors Album',
      duration: 15, // 歌曲时长为60秒
      artwork:
        'https://imgessl.kugou.com/stdmusic/20230610/20230610061601506971.jpg',
      trackUrl:
        'https://webfs.hw.kugou.com/202407111524/c4ab86595dad775587e119b595ca0fe7/KGTX/CLTX001/3d6391a8a0fb81b62c68c6a4429f63fd.mp3',
      lyrics: [
        {time: '00:00', text: 'Jordann-Dehors'},
        {time: '00:14', text: 'La fanfare frémit au carrefour de ta forme'},
        {time: '00:25', text: 'Martellant sa poésie diforme'},
        {
          time: '00:35',
          text: 'Cest leau de vie dans la sève la conscience qui sachève',
        },
        {time: '00:46', text: 'Témoin de ta vision auditeur de ta prison'},
      ],
    },
    {
      id: '1',
      title: 'bôa - DUVET',
      artist: 'bôa - DUVET',
      album: 'Twilight',
      duration: 15, // 歌曲时长为60秒
      artwork:
        'src="https://imgessl.kugou.com/stdmusic/20211126/20211126180710114397.jpg"',
      trackUrl:
        'https://webfs.hw.kugou.com/202407111524/c4ab86595dad775587e119b595ca0fe7/KGTX/CLTX001/3d6391a8a0fb81b62c68c6a4429f63fd.mp3',
      lyrics: [
        {time: '00:00', text: 'bôa - DUVET'},
        {time: '00:01', text: 'And you dont seem to understand'},
        {time: '00:06', text: 'A shame you seemed an honest man'},
        {time: '00:11', text: 'And all the fears you hold so dear'},
        {time: '00:16', text: 'Will turn to whisper in your ear'},
        {time: '00:21', text: 'And you know what they say might hurt you'},
      ],
    },
    {
      id: '3',
      title: '马思唯 - 登机',
      artist: '马思唯',
      album: 'Humble Swag Album',
      duration: 15, // 歌曲时长为60秒
      artwork:
        'https://imgessl.kugou.com/stdmusic/20220317/20220317202406892859.jpg',
      trackUrl:
        'https://webfs.hw.kugou.com/202407111549/fef169bdcce2622bdc4d6b6c6aaab43b/v2/e4fe9b25f61079452cda17b162451c34/part/0/960131/G336/M04/BD/54/clip_MJUEAGTWqqKAIXipACeBd3APrJo381.mp3',
      lyrics: [
        {time: '00:00', text: 'Jordann-Dehors'},
        {time: '00:09', text: '中文说唱除了我之外'},
        {time: '00:10', text: '都要被区别对待'},
        {time: '00:12', text: 'My punchline 像本嘻哈圣经被人跪拜'},
        {time: '00:15', text: '我和我的家族兄弟拳头一致对外'},
        {time: '00:17', text: '我们的最爱是sipping Henny'},
        {time: '00:19', text: '干掉假的rappers当做配菜'},
        {time: '00:22', text: '你们要记得'},
        {time: '00:23', text: '招惹我们跳火坑是不会有存活率的'},
        {time: '00:26', text: '你吞了麦克风也无法像我一样押韵'},
      ],
    },
  ];
  const songs = [
    {
      id: '1',
      title: 'Song OneSong OneSong OneSong OneSong OneSong OneSong OneSong One',
      artist: 'Artist A',
    },
    {id: '2', title: 'Song One', artist: 'Artist A'},
    {
      id: '3',
      title: 'Song OneSong OneSong OneSong OneSong OneSong OneSong OneSong One',
      artist: 'Artist A',
    },
    {id: '4', title: 'Song One', artist: 'Artist A'},
    {
      id: '5',
      title: 'Song OneSong OneSong OneSong OneSong OneSong OneSong OneSong One',
      artist: 'Artist A',
    },
    {id: '6', title: 'Song One', artist: 'Artist A'},
    {
      id: '7',
      title: 'Song OneSong OneSong OneSong OneSong OneSong OneSong OneSong One',
      artist: 'Artist A',
    },
    {id: '8', title: 'Song One', artist: 'Artist A'},
    {
      id: '9',
      title: 'Song OneSong OneSong OneSong OneSong OneSong OneSong OneSong One',
      artist: 'Artist A',
    },
    {id: '10', title: 'Song One', artist: 'Artist A'},
    {
      id: '11',
      title: 'Song OneSong OneSong OneSong OneSong OneSong OneSong OneSong One',
      artist: 'Artist A',
    },
    {id: '12', title: 'Song One', artist: 'Artist A'},
    // ...更多歌曲数据
  ];
  const SongItem = ({title, artist}) => (
    <TouchableOpacity>
      <View
        style={{
          width: screenWidth,
          height: 80,
          // backgroundColor: 'red',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 10,
          padding: 10,
          flexDirection: 'row',
        }}>
        <Image
          style={{width: screenWidth * 0.2, height: screenHeight * 0.1}}
          source={{
            uri: 'https://imgessl.kugou.com/stdmusic/20220317/20220317202406892859.jpg',
          }}
          resizeMode="cover"></Image>
        <View
          style={{
            width: screenWidth * 0.6,
            height: screenHeight * 0.1,
            // backgroundColor: 'blue',
            justifyContent: 'center',
            padding: 10,
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              fontSize: 20,
              overflow: 'hidden',
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            {title}
          </Text>
          <Text>{artist}</Text>
        </View>
        <Image
          style={{
            width: screenWidth * 0.04,
            height: screenHeight * 0.03,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={require('../../public/start.png')}
          resizeMode="cover"></Image>
      </View>
    </TouchableOpacity>
  );
  const handleRefresh = () => {
    setRefreshing(false);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={songs}
        renderItem={({item}) => (
          <SongItem title={item.title} artist={item.artist} />
        )}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});
export default RecommendedTab;

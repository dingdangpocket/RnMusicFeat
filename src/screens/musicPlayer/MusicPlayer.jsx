/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  Easing,
} from 'react-native';
import Video from 'react-native-video';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Next, Last} from '../../icons/index';
import {Svg, Line, Circle} from 'react-native-svg';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const MusicPlayer = ({route}) => {
  const [loactMusicList, setLoactMusicList] = useState([
    {
      id: '0',
      index: 0,
      title: 'Jordann - Dehors',
      artist: 'Jordann',
      album: 'Dehors Album',
      duration: 15, // 歌曲时长为60秒
      artwork:
        'https://imgessl.kugou.com/stdmusic/20230610/20230610061601506971.jpg',
      trackUrl:
        'https://webfs.hw.kugou.com/202407142010/53a8bdaef440da245c387fef05b9d2d5/KGTX/CLTX001/fc98ca1bb834649c6d2f5223f344d08b.mp3',
      lyrics: [
        {time: '00:00', text: 'Dehors Album'},
        {time: '00:14', text: 'La fanfare frémit au carrefour de ta forme'},
        {time: '00:25', text: 'Martellant sa poésie diforme'},
        {
          time: '00:35',
          text: 'Cest leau de vie dans la sève la conscience qui sachève',
        },
        {time: '00:46', text: 'Témoin de ta vision auditeur de ta prison'},
        {time: '00:49', text: '....'},
      ],
    },
    {
      id: '1',
      index: 1,
      title: 'bôa - DUVET',
      artist: 'bôa - DUVET',
      album: 'Twilight',
      duration: 15, // 歌曲时长为60秒
      artwork:
        'https://imgessl.kugou.com/stdmusic/20211126/20211126180710114397.jpg',
      trackUrl:
        'https://webfs.hw.kugou.com/202407122244/cac2cfd2bab4b6900505bfa6e8d22d46/v2/deb87610f05cc93eaf4c1d95c9337cd4/G369/M0A/8C/13/UZUEAGU82bmANsGGADG6m0DNm0w345.mp3',
      lyrics: [
        {time: '00:00', text: 'bôa - DUVET'},
        {time: '00:01', text: 'And you dont seem to understand'},
        {time: '00:06', text: 'A shame you seemed an honest man'},
        {time: '00:11', text: 'And all the fears you hold so dear'},
        {time: '00:16', text: 'Will turn to whisper in your ear'},
        {time: '00:21', text: 'And you know what they say might hurt you'},
        {time: '00:24', text: '....'},
      ],
    },
    {
      id: '2',
      index: 2,
      title: '马思唯 - 登机',
      artist: '马思唯',
      album: 'Humble Swag Album',
      duration: 15, // 歌曲时长为60秒
      artwork:
        'https://imgessl.kugou.com/stdmusic/20220317/20220317202406892859.jpg',
      trackUrl:
        'https://webfs.hw.kugou.com/202407121626/8f62a392febd6836e75556d20d4cf4dc/v2/e4fe9b25f61079452cda17b162451c34/part/0/960131/G336/M04/BD/54/clip_MJUEAGTWqqKAIXipACeBd3APrJo381.mp3',
      lyrics: [
        {time: '00:00', text: 'Humble Swag Album'},
        {time: '00:09', text: '中文说唱除了我之外'},
        {time: '00:10', text: '都要被区别对待'},
        {time: '00:12', text: 'My punchline 像本嘻哈圣经被人跪拜'},
        {time: '00:15', text: '我和我的家族兄弟拳头一致对外'},
        {time: '00:17', text: '我们的最爱是sipping Henny'},
        {time: '00:19', text: '干掉假的rappers当做配菜'},
        {time: '00:22', text: '你们要记得'},
        {time: '00:23', text: '招惹我们跳火坑是不会有存活率的'},
        {time: '00:26', text: '你吞了麦克风也无法像我一样押韵'},
        {time: '00:28', text: '....'},
      ],
    },
    {
      id: '3',
      index: 3,
      title: '邓紫棋',
      artist: '邓紫棋',
      album: '摩天动物园',
      duration: 15, // 歌曲时长为60秒
      artwork:
        'https://imgessl.kugou.com/stdmusic/20191226/20191226204018306531.jpg',
      trackUrl:
        'https://webfs.hw.kugou.com/202407122239/370fa99e2ce3ed9a08792e36ed7abfa3/v2/0ec0dfe7a4090b3c5c2c1831d7f3ed51/part/0/960127/G185/M08/17/0B/clip_-Q0DAF4WEP6AbxIRADmMOR-Oo88467.mp3',
      lyrics: [{time: '00:00', text: '...'}],
    },
    {
      id: '4',
      index: 4,
      title: 'OneRepublic - Hurt',
      artist: 'OneRepublic - Hurt',
      album: 'OneRepublic - Hurt',
      duration: 15, // 歌曲时长为60秒
      artwork:
        'https://imgessl.kugou.com/stdmusic/20240706/20240706062701335875.jpg',
      trackUrl:
        'https://webfs.hw.kugou.com/202407122235/1ef7f9c4ca70d164e4a357b4435e0739/KGTX/CLTX001/7c6f189451f13f22c7f943f3fb491d09.mp3',
      lyrics: [
        {time: '00:00', text: '....'},
        {time: '00:28', text: '....'},
      ],
    },
    {
      id: '5',
      index: 5,
      title: 'Cigarettes After',
      artist: 'Cigarettes After',
      album: 'Humble Swag Album',
      duration: 15, // 歌曲时长为60秒
      artwork:
        'https://imgessl.kugou.com/stdmusic/20240708/20240708091701640621.jpg',
      trackUrl:
        'https://webfs.hw.kugou.com/202407122232/463dfe8426c315e57bdd39e9bb8d2939/KGTX/CLTX001/b25f57f42ee067cef0f5cf9a5215d1cf.mp3',
      lyrics: [{time: '00:00', text: 'Cigarettes After'}],
    },
    {
      id: '6',
      index: 6,
      title: '周杰伦',
      artist: '周杰伦',
      album: 'Humble Swag Album',
      duration: 15, // 歌曲时长为60秒
      artwork:
        'https://imgessl.kugou.com/stdmusic/20230920/20230920142503632013.jpg',
      trackUrl:
        'https://webfs.hw.kugou.com/202407122244/b090b2351caa5fb0e7f0527726785f02/v2/fbc234520fed713c30c1c026e7352770/part/0/960115/G373/M05/83/C7/clip_VZUEAGVDobiANlMfADqkYvFtF5I141.mp3',
      lyrics: [{time: '00:00', text: 'JAY-周杰伦'}],
    },
  ]);
  const refPlayer = useRef(null);
  const [rate] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [resizeMode, setResizeMode] = useState('contain');
  const [paused, setPaused] = useState(false);
  const [currentSong, setCurrentSong] = useState(loactMusicList[0]);
  const [currentTime, setCurrentTime] = useState();
  const [currentLyrics, setCurrentLyrics] = useState('');
  const [durationTime, setDurationTime] = useState();

  const formatTimeSt = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const onLoad = onLoad => {
    if (onLoad) {
      setDurationTime(onLoad.duration);
    } else {
      console.log('ENPTY');
    }
    Animated.timing(progress, {
      toValue: 30,
      duration: onLoad.duration * 1000,
      useNativeDriver: true,
    }).start();
  };

  const onSeek = timeInSeconds => {
    refPlayer.current.seek(timeInSeconds);
  };

  const onLastSong = () => {
    let index = loactMusicList.indexOf(currentSong);
    if (index == 0) {
      setCurrentSong(loactMusicList[loactMusicList.length - 1]);
      scrollViewRef.current.scrollTo({
        x: screenWidth * 1 * (loactMusicList.length - 1),
        animated: true,
      });
    } else {
      setCurrentSong(loactMusicList[index - 1]);
      scrollViewRef.current.scrollTo({
        x: screenWidth * 1 * (index - 1),
        animated: true,
      });
    }
  };

  const onNextSong = () => {
    let index = loactMusicList.indexOf(currentSong);
    if (index == loactMusicList.length - 1) {
      setCurrentSong(loactMusicList[0]);
      scrollViewRef.current.scrollTo({
        x: 0,
        animated: true,
      });
    } else {
      setCurrentSong(loactMusicList[index + 1]);
      scrollViewRef.current.scrollTo({
        x: screenWidth * 1 * (index + 1),
        animated: true,
      });
    }
  };

  const onChangeStatue = () => {
    paused ? setPaused(false) : setPaused(true);
    paused ? startRotation() : stopRotation();
  };

  const onProgress = onProgress => {
    if (
      String(formatTimeSt(onProgress.currentTime)) == formatTimeSt(durationTime)
    ) {
      onNextSong();
    }
    setCurrentTime(onProgress.currentTime);
    currentSong.lyrics.forEach(item => {
      if (String(item.time) == String(formatTimeSt(onProgress.currentTime))) {
        setCurrentLyrics(item.text);
      }
    });
  };

  const progress = new Animated.Value(0);
  const StrokeDashoffset =
    screenWidth * 0.88 - (currentTime / durationTime) * screenWidth * 0.88;
  //进度偏移值=固定总长-（当前偏移比例*固定总长）

  const [isRotating, setIsRotating] = useState(false);
  const rotationValue = useRef(new Animated.Value(0)).current;
  const rotateInterpolation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const startRotation = () => {
    rotationValue.setValue(0);
    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 8000,
      easing: Easing.linear,
      useNativeDriver: true,
      isInteraction: false,
    }).start(({finished}) => {
      if (finished) {
        startRotation();
      }
    });
    setIsRotating(true);
  };

  const stopRotation = () => {
    rotationValue.stopAnimation();
    setIsRotating(false);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (event, gestureState) => {
      stopRotation();
    },
    onPanResponderMove: (event, gestureState) => {
      stopRotation();
      setPaused(true);
      const newX = event.nativeEvent.locationX - gestureState.moveX;
      setPointX(newX);
      if (gestureState.moveX > screenWidth * 1) {
        onNextSong();
      }
      if (gestureState.moveX < 15) {
        onLastSong();
      } else {
        const rate = gestureState.moveX / (screenWidth * 1);
        const seekTime = durationTime * rate;
        setCurrentTime(seekTime);
        //注意！keyCode
        onSeek(seekTime);
      }
    },
    onPanResponderRelease: (event, gestureState) => {
      setPointX(event.nativeEvent.locationX - gestureState.moveX);
      setPaused(false);
      startRotation();
    },
  });

  const [pointX, setPointX] = useState();
  useEffect(() => {
    setPointX(String(screenWidth * 0.88 - StrokeDashoffset + 6));
  }, [StrokeDashoffset]);

  const scrollViewRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleMomentumScrollEnd = event => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const offset =
      contentOffset.x + layoutMeasurement.width - screenWidth * 0.2;
    const index = Math.floor(offset / layoutMeasurement.width);
    if (index == 1) {
      if (contentOffset.x < (screenWidth * 1) / 2) {
        scrollViewRef.current.scrollTo({
          x: -contentOffset.x,
          animated: true,
        });
      }
      if (contentOffset.x > (screenWidth * 1) / 2)
        scrollViewRef.current.scrollTo({
          x: screenWidth * 1 * index,
          animated: true,
        });
    } else {
      if (contentOffset.x > screenWidth * 1 * (index - 0.5)) {
        scrollViewRef.current.scrollTo({
          x: screenWidth * 1 * index,
          animated: true,
        });
      }
      if (contentOffset.x < screenWidth * 1 * (index - 0.5)) {
        scrollViewRef.current.scrollTo({
          x: screenWidth * 1 * (index - 1),
          animated: true,
        });
      }
    }
    setCurrentIndex(index);
  };

  useEffect(() => {
    setCurrentSong(loactMusicList[currentIndex]);
    startRotation();
  }, [currentIndex]);

  return (
    <View
      style={{
        flex: 1,
        ...styles.center,
      }}>
      <View
        style={{
          height: screenHeight * 0.5,
          width: screenWidth * 1,
          ...styles.center,
        }}>
        <Image
          style={{
            position: 'absolute',
            left: 220,
            top: 20,
            width: 100,
            height: 100,
            zIndex: 3,
          }}
          source={require('../../public/citou.png')}
          resizeMode="contain"></Image>
        <ScrollView
          ref={scrollViewRef}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          horizontal={true}
          style={{
            height: screenHeight * 0.5,
            width: screenWidth * 1,
            // backgroundColor: 'blue',
          }}>
          {loactMusicList.map(item => {
            return (
              <View
                key={item.id}
                style={{
                  height: screenHeight * 0.5,
                  width: screenWidth * 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgb(240,240,240)',
                }}>
                <Animated.View
                  style={[
                    {
                      transform: [{rotate: rotateInterpolation}],
                    },
                  ]}>
                  <Image
                    style={{
                      width: 280,
                      height: 280,
                      borderRadius: 140,
                      borderWidth: 35,
                      borderColor: 'rgba(20,20,20,0.99)',
                      ...styles.center,
                    }}
                    source={{
                      uri: item.artwork,
                    }}
                    resizeMode="contain"></Image>
                </Animated.View>

                <View
                  style={{
                    ...styles.center,
                    marginTop: 15,
                  }}>
                  <Text>{item.title}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          width: screenWidth * 0.9,
          height: screenHeight * 0.12,
          ...styles.center,
          marginTop: 10,
          borderRadius: 10,
          // backgroundColor: 'rgb(10,80,80)',
        }}>
        <View
          style={{
            width: screenWidth * 0.83,
            height: screenHeight * 0.03,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            //backgroundColor: 'green',
          }}>
          <Text>{formatTimeSt(currentTime)}</Text>
          <Text>{formatTimeSt(durationTime)}</Text>
        </View>
        <View
          style={{
            width: screenWidth * 0.8,
            height: screenHeight * 0.03,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Svg width={screenWidth * 0.9} height={screenHeight * 0.12}>
            <Line
              x1="10"
              y1="10"
              x2={screenWidth * 0.88}
              y2="10"
              stroke="rgb(220,220,220)"
              strokeWidth="5"
            />
            <Line
              x1="10"
              y1="10"
              x2={String(screenWidth * 0.88)}
              y2="10"
              stroke="rgb(175,175,175)"
              strokeWidth="3"
              strokeDasharray={String(screenWidth * 0.88)}
              strokeDashoffset={String(StrokeDashoffset)}
            />
               <Circle
                {...panResponder.panHandlers}
                cx={pointX}
                cy="10"
                r="10"
                fill="rgb(210,210,210)"
              />
          </Svg>
        </View>
      </View>
      <View
        style={{
          width: screenWidth * 0.9,
          height: screenHeight * 0.06,
          borderRadius: 10,
          backgroundColor: 'rgba(180,180,180,0.2)',
          ...styles.center,
          marginTop: 5,
          marginBottom: 10,
        }}>
        <Text>{currentLyrics}</Text>
      </View>
      <View
        style={{
          width: screenWidth * 0.9,
          height: screenHeight * 0.1,
          borderRadius: 10,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          // backgroundColor: 'green',
        }}>
        <TouchableOpacity
          onPress={onLastSong}
          style={{
            backgroundColor: 'white',
            height: screenHeight * 0.07,
            width: screenWidth * 0.2,
            borderRadius: 30,
            ...styles.center,
          }}>
          <Last width="30%" height="30%" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onChangeStatue()}>
          <View
            style={{
              backgroundColor: 'white',
              height: screenHeight * 0.07,
              width: screenWidth * 0.3,
              borderRadius: 30,
              ...styles.center,
            }}>
            {paused ? (
              <Image
                source={require(`../../public/start.png`)}
                style={{width: 30, height: 30}}
              />
            ) : (
              <Image
                source={require(`../../public/pause.png`)}
                style={{width: 30, height: 30}}
              />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onNextSong}
          style={{
            backgroundColor: 'white',
            height: screenHeight * 0.07,
            width: screenWidth * 0.2,
            borderRadius: 30,
            ...styles.center,
          }}>
          <Next width="30%" height="30%" onPress={onNextSong} />
        </TouchableOpacity>
      </View>
      <Video
        source={{
          uri: currentSong.trackUrl,
        }}
        ref={refPlayer}
        style={styles.container}
        rate={rate}
        paused={paused}
        volume={volume}
        muted={false}
        onLoad={onLoad}
        onProgress={onProgress}
        repeat={false}
        resizeMode={resizeMode}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  box: {
    height: 15,
    width: 0,
    backgroundColor: 'blue',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MusicPlayer;

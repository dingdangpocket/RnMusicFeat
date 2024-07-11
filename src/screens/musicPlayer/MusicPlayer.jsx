/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {ContentContext} from '../../context/ContextProvider';
import Video from 'react-native-video';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {log} from 'react-native-reanimated';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const MusicPlayer = ({route}) => {
  const scrollViewRef = useRef(null);

  const {params} = route;
  const {state, dispatch} = useContext(ContentContext);
  //   console.log(params);
  const refPlayer = useRef(null);
  const [rate] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [resizeMode, setResizeMode] = useState('contain');
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    console.log('>', params.id);
    const itemHeight = screenHeight * 0.68 * 0.22;
    console.log('总高', screenHeight * 0.68);
    console.log('元素高', itemHeight);
    console.log('布长', itemHeight * (params.index + 1));

    scrollViewRef.current.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
    scrollViewRef.current.scrollTo({
      x: 0,
      y: itemHeight * (params.index + 1),
      animated: true,
    });
  }, [params]);
  const onError = onError => {
    console.log('播放错误', onError);
  };
  const onLoad = onLoad => {
    console.log('加载完成', onLoad);
  };
  const loadStart = loadStart => {
    console.log('开始加载', loadStart);
  };
  const onProgress = onProgress => {
    // console.log('播放进度', onProgress);
  };
  const onEnd = onEnd => {
    console.log('加载结束', onEnd);
  };
  const onSeek = timeInSeconds => {
    videoRef.current.seek(timeInSeconds);
  };
  const scrollToTop = () => {
    console.log(scrollViewRef);
    scrollViewRef.current.scrollTo({x: 0, y: 100, animated: true});
  };
  const onScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    console.log(offsetY);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          height: screenHeight * 0.68,
          width: screenWidth * 0.9,
          justifyContent: 'center',
          alignItems: 'center',
          //   backgroundColor: 'gray',
        }}>
        <ScrollView
          onScroll={onScroll}
          ref={scrollViewRef}
          fadingEdgeLength={300}
          decelerationRate={0.99}
          contentOffset={{x: 0, y: 150}}
          disableIntervalMomentum={true}
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 10,
            flex: 1,
            padding: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* 居中容器 */}
            {state.musicList.map(item => {
              return (
                <View key={item.id}>
                  <Image
                    style={{
                      width: screenWidth * 0.45,
                      height: screenHeight * 0.22,
                      borderRadius: 10,
                      backgroundColor: 'red',
                    }}
                    source={{
                      uri: item.artwork,
                    }}
                    resizeMode="cover"></Image>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 15,
                    }}>
                    <Text>{item.title}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          width: screenWidth * 0.9,
          height: screenHeight * 0.1,
          borderRadius: 10,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}></View>
      <View
        style={{
          width: screenWidth * 0.9,
          height: screenHeight * 0.1,
          borderRadius: 10,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}></View>
      <TouchableOpacity onPress={scrollToTop}>
        <Text>999</Text>
      </TouchableOpacity>
      <Video
        source={{
          uri: params.trackUrl,
        }}
        ref={refPlayer} //实例;
        style={styles.container} //样式;
        rate={rate} //倍率;
        paused={paused} // 控制暂停/播放，0 代表暂停paused, 1代表播放normal;
        volume={volume} // 0静音, 1正常，其他数字表示放大倍数;
        muted={true} // true静音，默认false;
        onLoad={onLoad} // 加载完毕时回调;
        onLoadStart={loadStart} // 视频开始加载回调;
        onProgress={onProgress} // 进度实时回调;
        onEnd={onEnd} // 视频播放完毕回调函数;
        repeat={false} //重复播放;
        resizeMode={resizeMode} //嵌套方式;
        onError={onError}
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
});
export default MusicPlayer;

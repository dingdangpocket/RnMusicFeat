/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useContext, useEffect, Button} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Animated,
  Easing,
  PanResponder,
} from 'react-native';
import {ContentContext} from '../../context/ContextProvider';
import Video from 'react-native-video';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Next, Last} from '../../icons/index';
import {Svg, Line, Path, Circle, Marker} from 'react-native-svg';
import {log} from 'react-native-reanimated';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const MusicPlayer = ({route}) => {
  const scrollViewRef = useRef(null);

  const {item, musicList} = route.params;
  const {state, dispatch} = useContext(ContentContext);
  //   console.log(params);
  const refPlayer = useRef(null);
  const [rate] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [resizeMode, setResizeMode] = useState('contain');
  const [paused, setPaused] = useState(false);
  const [currentState, setCurrentState] = useState(item.index);
  const [currentSong, setCurrentSong] = useState(musicList[item.index]);
  const [loactMusicList, setLoactMusicList] = useState(musicList);
  const [currentTime, setCurrentTime] = useState();
  const [currentLyrics, setCurrentLyrics] = useState('');
  const [durationTime, setDurationTime] = useState();
  useEffect(() => {
    console.log('item', item);
    console.log('musicList', musicList);
    console.log(musicList[item.index]);
    // setCurrentState(item.index);
    // setCurrentSong(musicList[item.index]);
    // setLoactMusicList(musicList);
    console.log('?', currentSong);
  }, [route, musicList, currentSong, currentState]);

  const onError = onError => {
    console.log('播放错误', onError);
  };
  const formatTimeSt = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    // 将分钟和秒数转换为两位字符串
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };
  const onLoad = onLoad => {
    if (onLoad) {
      console.log('加载完成', onLoad.duration, onLoad.duration * 1000);

      // const res = onLoad.duration * 1000;
      setDurationTime(onLoad.duration);
      // console.log('DurationTime', durationTime);
    } else {
      console.log('ENPTY');
    }
    Animated.timing(progress, {
      toValue: 30,
      duration: onLoad.duration * 1000,
      useNativeDriver: false,
    }).start();
  };
  const loadStart = loadStart => {
    console.log('开始加载', loadStart);
  };

  const onEnd = onEnd => {
    console.log('加载结束', onEnd);
  };
  const onSeek = timeInSeconds => {
    console.log('durationTime', timeInSeconds);
    refPlayer.current.seek(timeInSeconds);
  };
  const left = () => {
    let index = loactMusicList.indexOf(currentSong);
    if (index == 0) {
      setCurrentSong(loactMusicList[loactMusicList.length - 1]);
    } else {
      setCurrentSong(loactMusicList[index - 1]);
    }
  };
  const right = () => {
    let index = loactMusicList.indexOf(currentSong);
    if (index == loactMusicList.length - 1) {
      setCurrentSong(loactMusicList[0]);
    } else {
      setCurrentSong(loactMusicList[index + 1]);
    }
  };
  const onChangeStatue = () => {
    paused ? setPaused(false) : setPaused(true);
  };
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    // 将分钟和秒数转换为两位字符串
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedSeconds}`;
  };

  const onProgress = onProgress => {
    if (
      String(formatTimeSt(onProgress.currentTime)) == formatTimeSt(durationTime)
    ) {
      right();
    }
    setCurrentTime(onProgress.currentTime);

    currentSong.lyrics.forEach(item => {
      if (String(item.time) == String(formatTimeSt(onProgress.currentTime))) {
        setCurrentLyrics(item.text);
      }
    });
  };

  const progress = new Animated.Value(0);
  const widthInterpolate = progress.interpolate({
    inputRange: [0, 30],
    outputRange: [0, screenWidth * 0.6],
  });

  const StrokeDashoffset =
    screenWidth * 0.88 - (currentTime / durationTime) * screenWidth * 0.88;
  //进度偏移值=固定总长-（当前偏移比例*固定总长）

  useEffect(() => {
    setPointX(String(screenWidth * 0.88 - StrokeDashoffset + 5));
  }, [StrokeDashoffset]);
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (event, gestureState) => {},
    onPanResponderMove: (event, gestureState) => {
      setPaused(true);
      const newX = event.nativeEvent.locationX - gestureState.moveX;
      setPointX(newX);
      if (gestureState.moveX > screenWidth * 0.88) {
        right();
      }
      if (gestureState.moveX < 15) {
        left();
      } else {
        const rate = gestureState.moveX / (screenWidth * 0.88);
        const seekTime = durationTime * rate;
        setCurrentTime(seekTime);
        //注意！keyCode
        onSeek(seekTime);
      }
    },
    onPanResponderRelease: (event, gestureState) => {
      setPointX(event.nativeEvent.locationX - gestureState.moveX);
      setPaused(false);
    },
  });
  const [pointX, setPointX] = useState();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          height: screenHeight * 0.5,
          width: screenWidth * 0.9,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray',
        }}>
        <View key={currentSong.id}>
          <Image
            style={{
              width: screenWidth * 0.45,
              height: screenHeight * 0.22,
              borderRadius: 10,
              backgroundColor: 'red',
              marginBottom: 15,
            }}
            source={{
              uri: currentSong.artwork,
            }}
            resizeMode="cover"></Image>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{currentSong.title}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: screenWidth * 0.9,
          height: screenHeight * 0.12,
          borderRadius: 10,
          backgroundColor: 'rgb(10,80,80)',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            width: screenWidth * 0.83,
            height: screenHeight * 0.03,
            flexDirection: 'row',
            // backgroundColor: 'green',
            justifyContent: 'space-between',
            alignItems: 'center',
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
            marginTop: 10,
          }}>
          <Svg width={screenWidth * 0.9} height={screenHeight * 0.12}>
            <Line
              x1="10"
              y1="10"
              x2={screenWidth * 0.88}
              y2="10"
              stroke="rgb(50,50,50)"
              strokeWidth="5"
            />
            <Line
              x1="10"
              y1="10"
              x2={String(screenWidth * 0.88)}
              y2="10"
              stroke="red"
              strokeWidth="3"
              strokeDasharray={String(screenWidth * 0.88)}
              strokeDashoffset={String(StrokeDashoffset)}
            />
            <Circle
              {...panResponder.panHandlers}
              cx={pointX}
              cy="10"
              r="10"
              fill="rgb(255,255,255)"
            />
            <Animated.View {...panResponder.panHandlers}></Animated.View>
          </Svg>
        </View>
      </View>

      <View
        style={{
          width: screenWidth * 0.9,
          height: screenHeight * 0.06,
          borderRadius: 10,
          backgroundColor: 'rgb(180,180,180)',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
        }}>
        <Text>{currentLyrics}</Text>
      </View>
      <View
        style={{
          width: screenWidth * 0.9,
          height: screenHeight * 0.1,
          borderRadius: 10,
          // backgroundColor: 'green',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={left}
          style={{
            backgroundColor: 'white',
            height: screenHeight * 0.07,
            width: screenWidth * 0.2,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
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
              justifyContent: 'center',
              alignItems: 'center',
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
          onPress={right}
          style={{
            backgroundColor: 'white',
            height: screenHeight * 0.07,
            width: screenWidth * 0.2,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Next width="30%" height="30%" onPress={right} />
        </TouchableOpacity>
      </View>
      <Video
        source={{
          uri: currentSong.trackUrl,
        }}
        ref={refPlayer} //实例;
        style={styles.container} //样式;
        rate={rate} //倍率;
        paused={paused} // 控制暂停/播放，0 代表暂停paused, 1代表播放normal;
        volume={volume} // 0静音, 1正常，其他数字表示放大倍数;
        muted={false} // true静音，默认false;
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
  box: {
    height: 15,
    width: 0,
    backgroundColor: 'blue',
  },
});
export default MusicPlayer;

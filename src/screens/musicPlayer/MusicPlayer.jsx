/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useContext, useEffect, Button} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  PanResponder,
} from 'react-native';
import {ContentContext} from '../../context/ContextProvider';
import Video from 'react-native-video';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Next, Last} from '../../icons/index';
import {Svg, Line, Circle} from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const MusicPlayer = ({route}) => {
  const {item, musicList} = route.params;
  const {state, dispatch} = useContext(ContentContext);
  const refPlayer = useRef(null);
  const [rate] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [resizeMode, setResizeMode] = useState('contain');
  const [paused, setPaused] = useState(false);
  const [currentSong, setCurrentSong] = useState(musicList[item.index]);
  const [loactMusicList, setLoactMusicList] = useState(musicList);
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
  const onError = onError => {
    console.log('播放错误', onError);
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
    refPlayer.current.seek(timeInSeconds);
  };
  const onLastSong = () => {
    let index = loactMusicList.indexOf(currentSong);
    if (index == 0) {
      setCurrentSong(loactMusicList[loactMusicList.length - 1]);
    } else {
      setCurrentSong(loactMusicList[index - 1]);
    }
  };
  const onNextSong = () => {
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
  useEffect(() => {
    setPointX(String(screenWidth * 0.88 - StrokeDashoffset + 6));
  }, [StrokeDashoffset]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (event, gestureState) => {},
    onPanResponderMove: (event, gestureState) => {
      setPaused(true);
      const newX = event.nativeEvent.locationX - gestureState.moveX;
      setPointX(newX);
      if (gestureState.moveX > screenWidth * 0.88) {
        onNextSong();
      }
      if (gestureState.moveX < 15) {
        onLastSong();
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
          // backgroundColor: 'gray',
        }}>
        <View key={currentSong.id}>
          <Image
            style={{
              width: screenWidth * 0.7,
              height: screenHeight * 0.35,
              borderRadius: 10,
              // backgroundColor: 'red',
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
          // backgroundColor: 'rgb(10,80,80)',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            width: screenWidth * 0.83,
            height: screenHeight * 0.03,
            flexDirection: 'row',
            //backgroundColor: 'green',
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
          justifyContent: 'center',
          alignItems: 'center',
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
          // backgroundColor: 'green',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={onLastSong}
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
          onPress={onNextSong}
          style={{
            backgroundColor: 'white',
            height: screenHeight * 0.07,
            width: screenWidth * 0.2,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
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
        onLoadStart={loadStart}
        onProgress={onProgress}
        onEnd={onEnd}
        repeat={false}
        resizeMode={resizeMode}
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

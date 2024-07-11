/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  PanResponder,
  Animated,
  Text,
  Easing,
  TouchableOpacity,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import CustomButton from 'src/components/CustomButton';
import {Center} from 'src/commonStyle/commonStyle';

const DiscoveryTab = () => {
  const refPlayer = useRef(null);
  const [rate] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [resizeMode, setResizeMode] = useState('contain');
  const [paused, setPaused] = useState(true);

  const [boxStyle, setBoxStyle] = useState({
    width: 150,
    height: 150,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
    borderStyle: 'solid',
    borderColor: 'purple',
  });
  const [borderStyle, setBorderStyle] = useState({
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
    borderStyle: 'solid',
    borderColor: 'purple',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
  });
  const [isRotating, setIsRotating] = useState(false);
  const [previousPan, setPreviousPan] = useState({x: 0, y: 0});
  const [pan] = useState(new Animated.ValueXY());
  const scaleValue = useRef(new Animated.Value(1)).current;
  const rotationValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    isRotating ? setPaused(false) : setPaused(true);
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.04,
          duration: 600,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 600,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [isRotating, scaleValue]);
  const startRotation = () => {
    rotationValue.setValue(0);
    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 2800,
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
  const resetRotation = () => {
    rotationValue.setValue(0);
    setIsRotating(false);
  };

  const rotateInterpolation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const commonBorderStyle = {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
    borderStyle: 'solid',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
  };
  const commonBoxStyle = {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
  };
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      pan.setValue({
        x: previousPan.x + gesture.dx,
        y: previousPan.y + gesture.dy,
      });
      // console.log("拖拽",previousPan.x + gesture.dx,previousPan.y + gesture.dy );
    },
    onPanResponderGrant: () => {
      setBorderStyle({
        borderColor: 'rgb(180,180,180)',
        ...commonBorderStyle,
      });
      setBoxStyle({
        backgroundColor: 'rgb(10,10,10)',
        ...commonBoxStyle,
      });
    },
    onPanResponderRelease: (event, gesture) => {
      setPreviousPan({
        x: previousPan.x + gesture.dx,
        y: previousPan.y + gesture.dy,
      });
      setBoxStyle({
        backgroundColor: 'black',
        ...commonBoxStyle,
      });
      setBorderStyle({
        borderColor: 'purple',
        ...commonBorderStyle,
      });
    },
  });
  const onError = onError => {
    // console.log('播放错误', onError);
  };
  const onLoad = onLoad => {
    // console.log('加载完成', onLoad);
  };
  const loadStart = loadStart => {
    // console.log('开始加载', loadStart);
  };
  const onProgress = onProgress => {
    // console.log('播放进度', onProgress);
  };
  const onEnd = onEnd => {
    // console.log('加载结束', onEnd);
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            transform: [
              {scale: scaleValue},
              {translateX: pan.x},
              {translateY: pan.y},
              {rotate: rotateInterpolation},
            ],
          },
          boxStyle,
        ]}
        {...panResponder.panHandlers}>
        <TouchableOpacity
          onPress={() => console.log('press')}
          style={borderStyle}>
          <Text style={styles.text}>Power By ReactNative</Text>
        </TouchableOpacity>
      </Animated.View>
      <View>
        <TouchableOpacity
          style={{
            width: 80,
            height: 50,
            borderRadius: 20,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
          onPress={isRotating ? stopRotation : startRotation}>
          {isRotating ? (
            <Image
              source={require(`../../public/pause.png`)}
              style={{width: 30, height: 30}}
            />
          ) : (
            <Image
              source={require(`../../public/start.png`)}
              style={{width: 30, height: 30}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 80,
            height: 50,
            borderRadius: 20,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
          onPress={resetRotation}>
          <Image
            source={require(`../../public/resume.png`)}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
      <Video
        source={{
          uri: 'https://webfs.hw.kugou.com/202407111256/af485eff55f16003149c68be246bdec5/KGTX/CLTX001/7647c76ad562f28877d99b6c486ba086.mp3',
        }}
        ref={refPlayer}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#260d26',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});
export default DiscoveryTab;

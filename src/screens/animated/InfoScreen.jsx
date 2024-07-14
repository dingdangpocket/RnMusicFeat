/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  PanResponder,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const InfoScreen = ({route}) => {
  const [light, setLight] = useState(true);
  const [previousPan, setPreviousPan] = useState({x: 0, y: 0});
  const [pan] = useState(new Animated.ValueXY({x: 0, y: 0}));
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (event, gesture) => {
      return true;
    },
    onMoveShouldSetPanResponder: Platform.select({
      default: () => true,
      android: (event, gesture) =>
        Math.abs(gesture.dx) > 10 || Math.abs(gesture.dy) > 10,
    }),
    // 在Android 上,平移事件与触摸事件混杂在一起。PanResponder捕获每个触摸事件。您必须设置一个阈值，并告诉PanResponder只有达到阈值时才捕获事件。
    onPanResponderMove: (event, gesture) => {
      pan.setValue({
        x: previousPan.x + gesture.dx,
        y: previousPan.y + gesture.dy,
      });
    },
    onPanResponderGrant: () => {},
    onPanResponderRelease: (event, gesture) => {
      setPreviousPan({
        x: previousPan.x + gesture.dx,
        y: previousPan.y + gesture.dy,
      });
    },
  });
  const [scaleAnim, setScaleAnim] = useState(new Animated.Value(1));
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));
  const [disable, setDisable] = useState(false);
  const startAnimation = () => {
    setDisable(true);
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setDisable(false);
      setLight(false);
    });
    // Animated.sequence([
    //   Animated.timing(scaleAnim, {
    //     toValue: 2,
    //     duration: 2000,
    //     easing: Easing.ease,
    //     useNativeDriver: false,
    //   }),
    //   Animated.timing(scaleAnim, {
    //     toValue: 2,
    //     duration: 2000,
    //     easing: Easing.ease,
    //     useNativeDriver: false,
    //   }),
    // ]).start;
  };

  const closeAnimation = () => {
    setLight(true);
    setDisable(true);
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(pan.x, {
        toValue: Dimensions.get('window').width - 10,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(pan.y, {
        toValue: Dimensions.get('window').height - 10,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      pan.setValue({
        x: 0,
        y: 0,
      });
      //注意重置元素动画完成后的坐标，下次start动画才会从这个位置开始缩放；
      //否则会按照动画删除后的位置缩放，所以看不见；
      setDisable(false);
      // setLight(true);
    });
  };

  const onChange = () => {
    console.log('light', light);
    if (disable) return;
    light ? startAnimation() : closeAnimation();
    // setLight(!light);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgb(50,50,50)',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          {
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.9,
            backgroundColor: 'rgb(180,180,180)',
            opacity: fadeAnim,
            borderRadius: 40,
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            zIndex: 5,
          },
          {
            transform: [
              {translateX: pan.x},
              {translateY: pan.y},
              {scale: scaleAnim},
            ],
          },
        ]}>
        <TouchableOpacity
          onPress={() => closeAnimation()}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: 'rgb(150,150,150)',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
          }}>
          <Text style={{fontSize: 10, color: 'white'}}>X</Text>
        </TouchableOpacity>
      </Animated.View>
      {light ? (
        <TouchableOpacity
          onPress={() => startAnimation()}
          style={{
            marginTop: -100,
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'rgb(150,150,150)',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            backgroundColor: 'red',
          }}>
          <Text style={{fontSize: 10}}>startAnimation</Text>
        </TouchableOpacity>
      ) : (
        ''
      )}
    </View>
  );
};
export default InfoScreen;

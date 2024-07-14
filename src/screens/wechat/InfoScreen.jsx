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
  const [style, setStyle] = useState({});
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
    onPanResponderGrant: () => {
      setStyle({borderWidth: 5, borderColor: '#B22222'})
    },
    onPanResponderRelease: (event, gesture) => {
      setStyle({borderWidth: 0})
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
    console.log('startAnimation');
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 400,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(() => {
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
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 800,
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
      // setDisable(false);
      // setLight(true);
    });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgb(45,45,45)',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          {
            width: Dimensions.get('window').width * 0.8,
            height: Dimensions.get('window').height * 0.8,
            backgroundColor: 'rgb(20,20,20)',
            opacity: fadeAnim,
            borderRadius: 22,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 5,
          },
          {
            transform: [
              {translateX: pan.x},
              {translateY: pan.y},
              {scale: scaleAnim},
            ],
          },
          {...style},
        ]}>
        <View
          style={{
            width: 290,
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            // backgroundColor: 'blue',
          }}>
          <TouchableOpacity
            onPress={() => closeAnimation()}
            style={[
              {
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: 'rgb(100,100,100)',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
              },
              {
                transform: [{scale: scaleAnim}],
              },
            ]}>
            <Text style={{fontSize: 10, color: 'black'}}>X</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: 265,
            height: 580,
            borderRadius: 15,
            backgroundColor: 'rgb(20,20,20)',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{color: 'white'}}>React native Animated is 🔥</Text>
        </View>
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
            backgroundColor: 'black',
            borderWidth: 10,
            borderColor: 'rgb(200,200,200)',
          }}>
          <Text style={{fontSize: 10, color: 'white'}}>startAnimation</Text>
        </TouchableOpacity>
      ) : (
        ''
      )}
    </View>
  );
};
export default InfoScreen;

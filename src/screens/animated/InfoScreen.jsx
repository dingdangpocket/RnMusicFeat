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
  const [light, setLight] = useState(false);
  const [previousPan, setPreviousPan] = useState({x: 0, y: 0});
  const [pan] = useState(new Animated.ValueXY({x: 0, y: -100}));
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
      // setLight(true);
      setDisable(false);
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
    setDisable(true);
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setDisable(false);
      // setLight(false);
    });
  };

  const onChange = () => {
    console.log('1');
    if (disable) return;
    light ? closeAnimation() : startAnimation();
    setLight(!light);
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
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: 'rgb(180,180,180)',
            opacity: fadeAnim,
            borderRadius: 50,
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
          // {pointerEvents: 'box-none'},
        ]}>
        <TouchableOpacity
          onPress={() => onChange()}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'rgb(150,150,150)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 10}}>startAnimation</Text>
        </TouchableOpacity>
      </Animated.View>
      {!light ? (
        <TouchableOpacity
          onPress={() => onChange()}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'rgb(150,150,150)',
            justifyContent: 'center',
            alignItems: 'center',
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

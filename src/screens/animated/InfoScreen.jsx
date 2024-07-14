/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  PanResponder,
  TouchableOpacity,
} from 'react-native';

const InfoScreen = ({route}) => {
  const [light, setLight] = useState(true);
  const [previousPan, setPreviousPan] = useState({x: 0, y: 0});
  const [pan] = useState(new Animated.ValueXY());
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (event, gesture) => {
      return true;
    },
    onMoveShouldSetPanResponder: (event, gesture) => {
      return true;
    },
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

  useEffect(() => {
    Animated.timing(pan, {
      toValue: {x: 0, y: 0},
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    startAnimation();
  }, []);

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 2,
        duration: 2000,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
    ]).start(() => {});
  };

  const closeAnimation = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 2000,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
    ]).start(() => {});
  };

  const onClose = () => {
    closeAnimation();
    // setLight(false);
  };
  const onStart = () => {
    startAnimation();
    // setLight(true);
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
            width: 100,
            height: 100,
            backgroundColor: 'red',
            opacity: fadeAnim,
          },
          {
            transform: [
              {translateX: pan.x},
              {translateY: pan.y},
              {scale: scaleAnim},
            ],
          },
        ]}></Animated.View>
      
      <TouchableOpacity
        onPress={() => onStart()}
        style={{width: 100, height: 100, backgroundColor: 'rgb(150,150,150)'}}>
        <Text>开启</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onClose()}
        style={{width: 100, height: 100, backgroundColor: 'rgb(150,150,150)'}}>
        <Text>关闭</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setLight(!light)}
        style={{width: 50, height: 50, backgroundColor: 'rgb(150,150,150)'}}>
        <Text>控制</Text>
      </TouchableOpacity>
    </View>
  );
};
export default InfoScreen;

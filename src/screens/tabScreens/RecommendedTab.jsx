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
const RecommendedTab = () => {
  return (
    <View style={styles.container}>
      <Text>1</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});
export default RecommendedTab;

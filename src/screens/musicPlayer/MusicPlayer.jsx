/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
const MusicPlayer = ({route}) => {
  const {params} = route;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 16}}>player</Text>
    </View>
  );
};
export default MusicPlayer;

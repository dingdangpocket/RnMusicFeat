import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {containStackRoutes} from 'src/router/index';
import HomeTabRoutes from './HomeTabsRoutes';
import MusicPlayer from '../screens/musicPlayer/MusicPlayer';
const Stack = createStackNavigator();
const linking = {
  prefixes: ['foundation://'],
  config: {
    initialRouteName: 'HomeTabs',
    screens: {
      InfoScreen: {
        path: 'InfoScreen/:id',
      },
    },
  },
};
//linking配置交给NavigationContainer；

const RoutesNav = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="MusicPlayer"
          component={MusicPlayer}
          options={{header: () => null, title: '播放器'}}
        /> */}
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabRoutes}
          options={{header: () => null, title: '首页'}}
        />
        {containStackRoutes.map(item => {
          return (
            <Stack.Screen
              key={item.name}
              name={item.name}
              options={{
                title: item.option.title,
                header: item.option.headerShown,
              }}
              component={item.component}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RoutesNav;

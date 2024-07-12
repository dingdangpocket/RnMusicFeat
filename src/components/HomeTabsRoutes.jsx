/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecommendedTab from 'src/screens/tabScreens/RecommendedTab';
import AccountTab from 'src/screens/tabScreens/AccountTab';
import {TouchableOpacity} from 'react-native';
import {RecommendedIconActive, MineIconActive} from 'src/icons';
const Tab = createBottomTabNavigator();
const IconSet = {
  ACTIVE_AccountTab: (
    <MineIconActive width="68%" height="68%" color="black" />
  ),
  UNACTIVE_AccountTab: (
    <MineIconActive width="68%" height="68%" color="#6b6a62" />
  ),
  ACTIVE_RecommendedTab: (
    <RecommendedIconActive width="63%" height="63%" color="black" />
  ),
  UNACTIVE_RecommendedTab: (
    <RecommendedIconActive width="63%" height="63%" color="#6b6a62" />
  ),
};
const HomeTabsRoutes = () => {
  const HomeTabRoutesConfig = [
    {
      name: 'RecommendedTab',
      component: RecommendedTab,
      option: {title: '推荐'},
      tabBarBadge: null,
    },
    {
      name: 'AccountTab',
      component: AccountTab,
      option: {title: '账户'},
      tabBarBadge: null,
    },
  ];
  return (
    <Tab.Navigator
      initialRouteName="RecommendedTab"
      detachInactiveScreens={false}
      lazy={true}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: '#6b6a62',
        labelStyle: {fontSize: 10},
        style: {height: 55},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          return focused
            ? IconSet['ACTIVE_' + route.name]
            : IconSet['UNACTIVE_' + route.name];
        },
        tabBarButton: props => (
          <TouchableOpacity activeOpacity={0.85} {...props} />
        ),
      })}>
      {HomeTabRoutesConfig.map(item => {
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
            options={{
              title: item.option.title,
              tabBarBadge: item.tabBarBadge,
              tabBarBadgeStyle: {
                maxWidth: 20,
                maxHeight: 16,
                fontSize: 9,
                lineHeight: 15,
                backgroundColor: 'rgba(255,51,0,0.9)',
              },
            }}
            component={item.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};
export default HomeTabsRoutes;

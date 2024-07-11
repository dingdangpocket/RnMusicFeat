/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecommendedTab from 'src/screens/tabScreens/RecommendedTab';
import AccountTab from 'src/screens/tabScreens/AccountTab';
import {ContentContext} from 'src/context/ContextProvider';
import {TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {
  RecommendedIconActive,
  RecommendedIconUnActive,
  MineIconUnActive,
  MineIconActive,
} from 'src/icons';
const Tab = createBottomTabNavigator();
const IconSet = {
  activeAccountTab: <MineIconActive width="75%" height="75%" />,
  unActiveAccountTab: <MineIconUnActive width="69%" height="69%" />,
  activeRecommendedTab: <RecommendedIconActive width="72%" height="72%" />,
  unActiveRecommendedTab: <RecommendedIconUnActive width="84%" height="84%" />,
};
const HomeTabsRoutes = () => {
  const {state, dispatch} = useContext(ContentContext);
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
      lazy={false}
      // sceneContainerStyle={{backgroundColor:"red"}}
      tabBarOptions={{
        activeTintColor: 'rgba(10,10,10,0.9)',
        inactiveTintColor: 'rgba(10,10,10,0.5)',
        labelStyle: {fontSize: 12},
        style: {height: 55},
        // activeBackgroundColor: "rgba(10,10,0,0.9)",
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          return focused
            ? IconSet['active' + route.name]
            : IconSet['unActive' + route.name];
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

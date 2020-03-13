import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import FavoritePage from '../pages/FavoritePage';
import MyPage from '../pages/MyPage';
import {themeChange} from '../redux/action/theme';
const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = props => {
  return (
    <BottomTab.Navigator initialRouteName="PopularPage">
      <BottomTab.Screen
        name="PopularPage"
        component={PopularPage}
        options={{
          header: () => null,
          tabBarLabel: '最热',
          tabBarIcon: ({color, focused}) => {
            return <MaterialIcons name="whatshot" size={26} style={{color}} />;
          },
        }}
      />
      <BottomTab.Screen
        name="TrendingPage"
        component={TrendingPage}
        options={{
          tabBarLabel: '趋势',
          tabBarIcon: ({color, focused}) => {
            return <Ionicons name="md-trending-up" size={26} style={{color}} />;
          },
        }}
      />
      <BottomTab.Screen
        name="FavoritePage"
        component={FavoritePage}
        options={{
          tabBarLabel: '收藏',
          tabBarIcon: ({color, focused}) => {
            return <MaterialIcons name="favorite" size={26} style={{color}} />;
          },
        }}
      />
      <BottomTab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, focused}) => {
            return <Entypo name="user" size={26} style={{color}} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default connect(() => ({}), {themeChange})(BottomTabNavigation);

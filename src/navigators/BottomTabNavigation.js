import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import FavoritePage from '../pages/FavoritePage';
import MyPage from '../pages/MyPage';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = props => {
  const {setTheme} = props;

  const TrendingRoute = useMemo(
    () => props => <TrendingPage {...props} setTheme={setTheme} />,
    [],
  );

  const PopularRoute = useMemo(
    () => props => <PopularPage {...props} setTheme={setTheme} />,
    [],
  );
  const FavoriteRoute = useMemo(
    () => props => <FavoritePage {...props} setTheme={setTheme} />,
    [],
  );
  const MyRoute = useMemo(
    () => props => <MyPage {...props} setTheme={setTheme} />,
    [],
  );

  return (
    <BottomTab.Navigator initialRouteName="PopularPage">
      <BottomTab.Screen
        name="PopularPage"
        component={PopularRoute}
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
        component={TrendingRoute}
        options={{
          tabBarLabel: '趋势',
          tabBarIcon: ({color, focused}) => {
            return <Ionicons name="md-trending-up" size={26} style={{color}} />;
          },
        }}
      />
      <BottomTab.Screen
        name="FavoritePage"
        component={FavoriteRoute}
        options={{
          tabBarLabel: '收藏',
          tabBarIcon: ({color, focused}) => {
            return <MaterialIcons name="favorite" size={26} style={{color}} />;
          },
        }}
      />
      <BottomTab.Screen
        name="MyPage"
        component={MyRoute}
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

export default BottomTabNavigation;

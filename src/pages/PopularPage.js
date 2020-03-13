import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const TopBar = createMaterialTopTabNavigator();

const PopularPage = props => {
  console.log('here is popular page');
  console.log(props);
  const tabNames = ['JavaScript', 'React', 'React Native', 'Web', 'Node'];
  return (
    <TopBar.Navigator
      style={styles.topBar}
      tabBarOptions={{
        style: {
          backgroundColor: '#a67',
        },
        tabStyle: {
          minWidth: 50,
        },
        labelStyle: {
          fontSize: 13,
          marginTop: 6,
          marginBottom: 6,
          textTransform: 'capitalize',
        },
        scrollEnabled: true,
        indicatorStyle: {
          height: 2,
          backgroundColor: 'white',
        },
      }}>
      {tabNames.map((value, index) => (
        <TopBar.Screen
          key={`TopBar-${index}`}
          name={value}
          component={PopularTopBar}
          options={
            {
              // tabBarLabel :''
            }
          }
        />
      ))}
    </TopBar.Navigator>
  );
};

export default PopularPage;

function PopularTopBar() {
  return (
    <View>
      <Text>PopularTopBar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flex: 1,
    marginTop: 30,
    color: 'blue',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

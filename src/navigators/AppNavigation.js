import React, {useEffect, useState, useMemo} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import WelcomePage from '../pages/WelcomePage';
import DetailPage from '../pages/DetailPage';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

const AppNavigation = props => {
  console.log('here is app navigation');
  console.log(props);
  const [isWelcomeTime, setIsWelcomeTime] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setIsWelcomeTime(false), 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <NavigationContainer theme={props.theme}>
      <Stack.Navigator>
        {isWelcomeTime ? (
          <Stack.Screen
            name="WelcomePage"
            component={WelcomePage}
            options={{
              header: () => null,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="BottomTabRoute"
              component={BottomTabNavigation}
              options={{
                header: () => null,
              }}
            />
            <Stack.Screen
              name="DetailPage"
              component={DetailPage}
              options={{
                headerBackTitle: 'Go Back',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default connect(state => ({theme: state.theme}))(AppNavigation);

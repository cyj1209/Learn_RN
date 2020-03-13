import React, {useEffect, useState, useMemo} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import WelcomePage from '../pages/WelcomePage';
import DetailPage from '../pages/DetailPage';

const Stack = createStackNavigator();

const AppNavigation = props => {
  // 我想要一个定时器，到时间了切换路由
  console.log('here is app navigation');
  console.log(props);
  const [isWelcomeTime, setIsWelcomeTime] = useState(true);
  const [nowTheme, setNowTheme] = useState(DefaultTheme);

  function setTheme(newTheme) {
    setNowTheme({
      ...nowTheme,
      ...newTheme,
    });
  }

  const BottomTabRoute = useMemo(
    () => props => <BottomTabNavigation {...props} setTheme={setTheme} />,
    [],
  );

  useEffect(() => {
    let timer = setTimeout(() => setIsWelcomeTime(false), 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <NavigationContainer theme={nowTheme}>
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
          // <Stack.Navigator>
          <>
            <Stack.Screen
              name="BottomTabRoute"
              component={BottomTabRoute}
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
          // </Stack.Navigator>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

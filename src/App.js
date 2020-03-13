import React from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './navigators/AppNavigation';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

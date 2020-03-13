import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WelcomePage = props => {
  console.log('here is welcome page');
  return (
    <View style={styles.container}>
      <Text>WelcomePage</Text>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomePage = () => {
  console.log('here is home page');
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

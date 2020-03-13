import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const TrendingPage = props => {
  console.log('here is Trending page');
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>TrendingPage</Text>
      <Button
        title="set red"
        onPress={e => {
          props.setTheme({
            colors: {
              primary: 'red',
            },
          });
        }}
      />
    </View>
  );
};

export default TrendingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

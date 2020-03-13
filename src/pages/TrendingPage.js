import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {themeChange} from '../redux/action/theme';

const TrendingPage = props => {
  console.log('here is Trending page');
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>TrendingPage</Text>
      <Button
        title="set red"
        onPress={() => {
          props.themeChange({
            colors: {
              primary: 'red',
            },
          });
        }}
      />
    </View>
  );
};

export default connect(null, {themeChange})(TrendingPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

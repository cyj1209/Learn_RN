import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {themeChange} from '../redux/action/theme';

const FavoritePage = props => {
  console.log('here is favorite page');
  return (
    <View style={styles.container}>
      <Text>FavoritePage</Text>
      <Button
        title="set orange"
        onPress={() =>
          props.themeChange({
            dark: false,
            colors: {
              primary: 'orange',
            },
          })
        }
      />
    </View>
  );
};

export default connect(null, {themeChange})(FavoritePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

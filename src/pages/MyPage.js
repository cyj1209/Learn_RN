import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const MyPage = props => {
  console.log('here is my page ');
  return (
    <View style={styles.container}>
      <Text>MyPage</Text>
      <Button
        title="Go to detail page"
        onPress={() => props.navigation.navigate('DetailPage')}
      />
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

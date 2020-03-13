import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import DataStore from '../util/DataStore';

const dataStore = new DataStore();
const DataStoreDemoPage = props => {
  async function loadData() {
    let url = 'https://api.github.com/search/repositories?q=node';
    let res = await dataStore.fetchData(url);
    console.log('res', res);
  }

  return (
    <View>
      <Text>DataStoreDemoPage</Text>
      <Button title="load Data" onPress={() => loadData()} />
    </View>
  );
};

export default DataStoreDemoPage;

const styles = StyleSheet.create({});

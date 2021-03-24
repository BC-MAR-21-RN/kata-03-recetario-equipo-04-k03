import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import data from './constants/data.json';
import List from './components/list';

export default function App() {
  const trendingList = data.filter(elem => {
    return elem.type === "Trending"
  });


  const recentList = data.filter(elem => {
    return elem.type === "Recent"
  });




  return (
    <View style={styles.container}>
      <SafeAreaView>
        <List list={trendingList} />
        <List list={recentList} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

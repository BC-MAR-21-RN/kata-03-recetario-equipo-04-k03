import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import data from './constants/data.json'
import Card from './components/card.js'
import List from './components/list.js'

export default function App() {

  const trendingList = data.filter(elem => {
    return elem.type === "Trending"
  })


  const recentList = data.filter(elem => {
    return elem.type === "Recent"
  })




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

import React from 'react';
import { StyleSheet, View, SafeAreaView,Text } from 'react-native';
import data from './constants/data.json';
import styles from './App.styles'
import { SearchBar, List } from './components';

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
        <SearchBar />
        <Text  style={styles.textTitle}>TRENDING</Text>
        <List list={trendingList} />
        <Text style={styles.textTitle}>RECENTS</Text>
        <List big list={recentList} />
      </SafeAreaView>
    </View>
  );
}

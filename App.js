import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, ScrollView, StatusBar } from 'react-native';
import data from './constants/data.json';
import styles from './App.styles'
import { SearchBar, List } from './components';
import WithContext from './context'
import FoodModal from './components/foodModal'


function App() {
  const trendingList = data.filter(elem => {
    return elem.type === "Trending"
  });

  const recentList = data.filter(elem => {
    return elem.type === "Recent"
  });

  return (
    <>
    <StatusBar barStyle="light-content"/>
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <SearchBar />
            <Text style={styles.textTitle}>TRENDING</Text>
            <List list={trendingList} />
            <Text style={styles.textTitle}>RECENTS</Text>
            <List big list={recentList} />
          </ScrollView>
        </SafeAreaView>
      </View>
      <FoodModal />
    </>
  );
}
export default WithContext(App);
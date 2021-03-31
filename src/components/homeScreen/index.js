import React from 'react'
import { StyleSheet, View, SafeAreaView, Text, ScrollView, StatusBar } from 'react-native';
import data from '../../library/constants/data.json'
import { HomeStyles as styles } from './styles';
import SearchBar from './searchBar'
import List from './list'
const HomeScreen = () => {
    const trendingList = data.filter(elem => {
        return elem.type === "Trending"
      });
    
      const recentList = data.filter(elem => {
        return elem.type === "Recent"
      });
    
    return (
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
    )
}

export default HomeScreen

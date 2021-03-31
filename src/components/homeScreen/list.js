import React from 'react';
import {View, FlatList} from 'react-native';
import Card from './card';
const List = ({list, big}) => {
  return (
    <View>
      <FlatList
        data={list}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={item => `${item.name}`}
        renderItem={({item, index}) => <Card key={index} {...item} big={big} />}
      />
    </View>
  );
};
export default List;

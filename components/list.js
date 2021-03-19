import React from 'react';
import { View, FlatList } from 'react-native';

import Card from "../components/card";

  const List = ({ list }) => {
    return (
      <View>
        <FlatList
          data={list}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item => `${item.name}`}
          renderItem={({ item, index }) => (
            <Card key={index} {...item} />
          )}
        />
      </View>
    )
  };
export default List
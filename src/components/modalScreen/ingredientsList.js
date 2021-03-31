import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {IngredientsListStyles as styles} from './styles';

const IngredientsList = ({ingredients, servings}) => {
  return (
    <ScrollView style={styles.modalContainer} bounces={false}>
      <View style={styles.ingredientContainer}>
        <Text style={styles.textBody2}>Ingredients</Text>
        <Text style={styles.textBody3}>for {servings} servings</Text>
        <View style={styles.ingredientRow}>
          {ingredients?.map(({name, quantity}, index) => {
            return (
              <View key={name + index}>
                <View style={styles.ingredientContent}>
                  <Text style={styles.textBody3}>{name}</Text>
                  <Text style={styles.textBody3}>{quantity}</Text>
                </View>
                <View style={styles.line} />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default IngredientsList;

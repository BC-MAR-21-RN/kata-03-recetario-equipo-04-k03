import React from 'react';
import {View, Image, TextInput} from 'react-native';
import {Icons} from '../../library/constants';
import {useInput} from '../../library/customHooks/useInput';
import {SearchBarStyles as styles, COLORS} from './styles';

const SearchBar = () => {
  const [searchProps] = useInput('');
  return (
    <View style={styles.searchContainer}>
      <Image source={Icons.search} style={styles.icons} />
      <TextInput
        placeholder="What do you want to eat?"
        style={styles.textInput}
        placeholderTextColor={COLORS.white}
        {...searchProps}
      />
      <Image source={Icons.mic} style={styles.icons} resizeMode="contain" />
    </View>
  );
};

export default SearchBar;

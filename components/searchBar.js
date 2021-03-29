import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { Theme, Icons } from '../constants';
import {useInput} from '../customHooks/useInput'
const { COLORS, SIZES } = Theme;

const searchBar = () => {
    const [searchProps,resetInput]=useInput('');
    return (
        <View style={styles.searchContainer}>
            <Image source={Icons.search} style={styles.icons}/>
            <TextInput 
                placeholder="What do you want to eat?"
                style={styles.textInput}
                placeholderTextColor={COLORS.white}
                {...searchProps}
            />
            <Image source={Icons.mic} style={styles.icons} resizeMode="contain"/>
        </View>
    )
}

export default searchBar

const styles = StyleSheet.create({
    searchContainer: {
        width: "90%",
        height: 40,
        backgroundColor: COLORS.lightGray,
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: SIZES.radius,
        marginVertical: SIZES.padding
    },
    icons: {
        width: 15,
        height: 15,
        tintColor: COLORS.white
    },
    textInput: {
        width: "90%",
        paddingHorizontal: 10,
        color: COLORS.white
    }
})
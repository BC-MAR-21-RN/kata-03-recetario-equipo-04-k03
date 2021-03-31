import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { Theme, Icons } from '../constants';
import {useInput} from '../customHooks/useInput'
const { COLORS, SIZES, FONTS } = Theme;

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
        height: 50,
        width: "90%",
        marginVertical: 30,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray
    },
    icons: {
        width: 20,
        height: 20,
        tintColor: COLORS.white
    },
    textInput: {
        width: "88%",
        height: 40,
        paddingHorizontal: 10,
        color: COLORS.white,
        paddingVertical:10,
        ...FONTS.body2,
    }
})
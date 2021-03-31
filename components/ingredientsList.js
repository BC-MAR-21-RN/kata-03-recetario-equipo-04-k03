import React from 'react'
import { ImageBackground, Modal, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Theme, Icons } from '../constants';
const { COLORS, FONTS } = Theme;
const ICONS_SIZE = 35;
const IngredientsList = ({ingredients, servings}) => {
    return (
        <ScrollView style={styles.modalContainer} bounces={false}>
        <View style={{ padding: 20 }}>
            <Text style={styles.textBody2}>Ingredients</Text>
            <Text style={styles.textBody3}>for {servings} servings</Text>
            <View style={{ marginVertical: 30 }}>
                {
                    ingredients?.map(({ name, quantity }, index) => {
                        return (
                            <View key={name + index}>
                                <View style={styles.ingredientContainer}>
                                    <Text style={styles.textBody3}>{name}</Text>
                                    <Text style={styles.textBody3}>{quantity}</Text>
                                </View>
                                <View style={styles.line} />
                            </View>
                        )
                    })
                }
            </View>
        </View>
    </ScrollView>
    )
}

export default IngredientsList

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: COLORS.secondary

    },
    image: {
        width: "100%",
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imageToolsContainer: {
        width: "100%",
        height: 400,
    },
    bannerContainer: {
        padding: Platform.OS === 'ios' ? 40 : 30,
        paddingTop: Platform.OS === 'ios' ? 70 : 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footherContainer: {
        padding: 40
    },
    textName: {
        ...FONTS.h1,
        color: COLORS.white
    },
    textType: {
        ...FONTS.h2,
        textTransform: "uppercase",
        color: COLORS.white
    },
    likeBtn: {
        width: ICONS_SIZE,
        height: ICONS_SIZE
    },
    shareBtn: {
        width: ICONS_SIZE,
        height: ICONS_SIZE,
        tintColor: COLORS.white,
        marginHorizontal: 10
    },
    closeBtn: {
        width: ICONS_SIZE - 3,
        height: ICONS_SIZE - 3,
        tintColor: COLORS.white,
    },
    textBody2: {
        ...FONTS.body2,
        color: COLORS.white
    },
    textBody3: {
        ...FONTS.body3,
        color: COLORS.white
    },
    line: {
        width: "100%",
        height: 2,
        backgroundColor: COLORS.lightGray
    },
    ingredientContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20
    }
})

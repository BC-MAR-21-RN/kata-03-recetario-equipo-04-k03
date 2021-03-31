import React, { useState, useContext } from "react";
import { ImageBackground, Modal, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Theme, Icons } from '../constants';
const { COLORS, FONTS } = Theme;

const ICONS_SIZE = 35;
const BannerModal = ({setModal,modal}) => {
    const [isToggled, setIsToggled] = useState(false);
    return (
       <View style={styles.bannerContainer}>
        <TouchableOpacity onPress={() => setIsToggled(!isToggled)}>
            <Image
                source={
                    isToggled ?
                        Icons.heart_filled
                        : Icons.heart_outline
                }
                style={
                    [styles.likeBtn],
                    {
                        tintColor: isToggled ?
                            COLORS.red
                            : COLORS.white
                    }
                }
                resizeMode="contain"
            />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
            <Image source={Icons.share} style={styles.shareBtn} resizeMode="contain" />
            <TouchableOpacity activeOpacity={0.8} onPress={() => setModal('')}>
                <Image source={Icons.close} style={styles.closeBtn} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default BannerModal
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
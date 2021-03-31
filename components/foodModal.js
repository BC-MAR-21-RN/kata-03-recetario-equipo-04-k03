import React, { useState, useContext } from "react";
import { ImageBackground, Modal, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ModalContext } from '../context/providers/ModalProvider'
import { Theme, Icons } from '../constants';
import data from '../constants/data.json';
import IngredientsList from "./ingredientsList";
import BannerModal from "./bannerModal";
const { COLORS, FONTS } = Theme;

const ICONS_SIZE = 35;

const FoodModal = () => {
    const { modal, setModal } = useContext(ModalContext);

    const { image, name, type, servings, ingredients } = modal && data.find(item => item.name === modal)
    return (
        <Modal
            animationType="slide"
            visible={Boolean(modal)}
            onRequestClose={() => setModal('')}
        >
            <ImageBackground
                source={{ uri: image }}
                style={styles.image}
                imageStyle={{ opacity: 0.6, height: '100%', backgroundColor: 'rgba(0,0, 0, 0.8)' }}
            >
                <BannerModal setModal={setModal} modal={modal}/>
                <View style={styles.footherContainer}>
                    <Text style={styles.textType}>{type}</Text>
                    <Text style={styles.textName}>{name}</Text>
                </View>
            </ImageBackground>
            <IngredientsList servings={servings} ingredients={ingredients} />
        </Modal>
    );
};

export default FoodModal;

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
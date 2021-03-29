import React, { useState, useContext } from "react";
import { Alert, FlatList, ImageBackground, Modal, StyleSheet, Text, SafeAreaView, View, Button } from "react-native";
import { ModalContext } from '../context/providers/ModalProvider'
import { Theme } from '../constants';
import data from '../constants/data.json';
const { COLORS, FONTS } = Theme;

const FoodModal = () => {
    const { modal, setModal } = useContext(ModalContext);
    const { image, name, type, ingredients } = modal && data.find(item => item.name === modal)
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={Boolean(modal)}
            onRequestClose={() => setModal('')}
        >
            <View style={styles.modalContainer}>
                <ImageBackground
                    source={{ uri: image }}
                    style={styles.image}
                    imageStyle={{ opacity: 0.5 }}
                >
                    <View style={styles.bannerContainer}>
                        <View >
                            <Text>CORAZON</Text>
                        </View>
                        <View>
                            <Text>EQUIS</Text>
                            <Text>EQUIS</Text>

                        </View>
                    </View>
                    <View style={styles.footherContainer}>
                        <Text style={styles.textType}>{type}</Text>
                        <Text style={styles.textName}>{name}</Text>

                    </View>
                </ImageBackground>
                {
                    ingredients?.map(({ name, quantity }) => {
                        return (
                            <View>
                                <Text>{name}</Text>
                                <Text>{quantity}</Text>
                            </View>
                        )
                    })
                }
            </View>
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
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imageToolsContainer: {
        width: "100%",
        height: 400,
    },
    bannerContainer: {
        padding: 40,
        paddingTop: 70,
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
    }
})
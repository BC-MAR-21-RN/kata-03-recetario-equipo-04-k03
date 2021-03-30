import React, { useState, useContext } from "react";
import { ImageBackground, Modal, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { ModalContext } from '../context/providers/ModalProvider'
import { Theme, Icons } from '../constants';
import data from '../constants/data.json';
const { COLORS, FONTS } = Theme;

const ICONS_SIZE = 35;

const FoodModal = () => {
    const { modal, setModal } = useContext(ModalContext);
    const [ isToggled, setIsToggled ] = useState(false);
    const { image, name, type, ingredients, servings } = modal && data.find(item => item.name === modal)
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={Boolean(modal)}
            onRequestClose={() => setModal('')}
        >
            <ScrollView style={styles.modalContainer} bounces={false}>
                <ImageBackground
                    source={{ uri: image }}
                    style={styles.image}
                    imageStyle={{ opacity: 0.5 }}
                >
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
                            <Image source={Icons.share} style={styles.shareBtn} resizeMode="contain"/>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setModal(!modal)}>
                                <Image source={Icons.close} style={styles.closeBtn} resizeMode="contain"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.footherContainer}>
                        <Text style={styles.textType}>{type}</Text>
                        <Text style={styles.textName}>{name}</Text>

                    </View>
                </ImageBackground>
                <View style={{ padding: 20 }}>
                    <Text style={styles.textBody2}>Ingredients</Text>
                    <Text style={styles.textBody3}>for {servings} servings</Text>
                    <View style={{ marginVertical: 30 }}>
                        {
                            ingredients?.map(({ name, quantity }) => {
                                return (
                                    <View key={name}>
                                        <View style={styles.ingredientContainer}>
                                            <Text style={styles.textBody3}>{name}</Text>
                                            <Text style={styles.textBody3}>{quantity}</Text>
                                        </View>
                                        <View style={styles.line}/>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
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
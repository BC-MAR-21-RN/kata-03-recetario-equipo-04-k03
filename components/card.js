import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '../constants';
import { ModalContext } from '../context/providers/ModalProvider'
const { FONTS, COLORS, SIZES } = Theme;
const HEIGHT = 280;

const Card = ({ image, name, big }) => {
    const { modal, setModal } = useContext(ModalContext);
    return (
        <TouchableOpacity onPress={() => setModal(name)} style={big ? style.cardBig : style.cardContainer}>
            <View style={style.imageContainer}>
                <Image source={{ uri: image }} style={style.image} />
            </View>
            <View style={style.bodyContainer}>
                <Text style={style.bodyText} numberOfLines={2}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card;
const style = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: "60%",
    },
    image: {
        borderRadius: SIZES.radius,
        ...StyleSheet.absoluteFillObject
    },
    bodyText: {
        ...FONTS.body3,
        color: COLORS.white,
    },
    bodyContainer: {
        marginVertical: SIZES.padding
    },
    cardContainer: {
        width: 180,
        height: HEIGHT,
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding,
    },
    cardBig: {
        width: 220,
        height: HEIGHT * 1.6,
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding,
    }
})
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


const Card = ({ image, name }) => {
    return (
        <View>
            <View style={style.image}> 
                <Image source={{uri: image}} style={StyleSheet.absoluteFillObject}/>
            </View>
            <Text>{ name }</Text>
        </View>
    )
}

export default Card;

const style = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    }
})
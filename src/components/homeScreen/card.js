import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ModalContext} from '../../library/context/providers/ModalProvider';
import {CardStyles as styles} from './styles';
const Card = ({image, name, big}) => {
  const {setModal} = useContext(ModalContext);
  return (
    <TouchableOpacity
      onPress={() => setModal(name)}
      style={big ? styles.cardBig : styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.bodyContainer}>
        <Text
          style={big ? styles.bodyTextBig : styles.bodyText}
          numberOfLines={2}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

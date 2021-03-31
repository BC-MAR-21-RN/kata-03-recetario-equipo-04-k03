import React, { useContext } from "react";
import { ImageBackground, Modal, Text, View } from "react-native";
import { ModalContext } from '../../library/context/providers/ModalProvider'
import data from '../../library/constants/data.json';
import BannerModal from "./bannerModal";
import { ModalScreen as styles } from './styles'
import IngredientsList from "./ingredientsList";


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
                style={styles.imageBackground}
                imageStyle={styles.imageBackgroundSpecific}
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
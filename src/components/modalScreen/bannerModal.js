import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {BannerModalStyles as styles, Icons} from './styles';
const BannerModal = ({setModal}) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <View style={styles.bannerContainer}>
      <TouchableOpacity onPress={() => setIsToggled(!isToggled)}>
        <Image
          source={isToggled ? Icons.heart_filled : Icons.heart_outline}
          style={{...styles.likeBtn, ...(isToggled && styles.isTogleeBtn)}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.closeShareArea}>
        <Image
          source={Icons.share}
          style={styles.shareBtn}
          resizeMode="contain"
        />
        <TouchableOpacity activeOpacity={0.8} onPress={() => setModal('')}>
          <Image
            source={Icons.close}
            style={styles.closeBtn}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BannerModal;

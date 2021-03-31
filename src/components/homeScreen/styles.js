import { StyleSheet } from 'react-native';

import { Theme } from '../../library/constants';
export const { COLORS, FONTS ,SIZES} = Theme;

export const HomeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.secondary
    },
    textTitle:{
      color: COLORS.primary,
      ...FONTS.h3,
      marginLeft: 10,
    }
  });

  export const SearchBarStyles = StyleSheet.create({
    searchContainer: {
        height: 50,
        width: "90%",
        marginVertical: 30,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray
    },
    icons: {
        width: 20,
        height: 20,
        tintColor: COLORS.white
    },
    textInput: {
        width: "88%",
        height: 40,
        paddingHorizontal: 10,
        color: COLORS.white,
        paddingVertical:10,
        ...FONTS.body2,
    }
})

const HEIGHT = 280;
export const CardStyles = StyleSheet.create({
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
  bodyTextBig: {
      ...FONTS.body2,
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
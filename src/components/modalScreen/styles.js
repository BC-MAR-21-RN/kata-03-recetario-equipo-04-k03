import { StyleSheet } from "react-native";
import { Theme, Icons as iconDir } from '../../library/constants';
export const { COLORS, FONTS } = Theme;
export const Icons = iconDir
const ICONS_SIZE = 35;
export const ModalScreen = StyleSheet.create({
    imageBackground: {
        width: "100%",
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    imageBackgroundSpecific: {
        opacity: 0.6,
        height: '100%',
        backgroundColor: 'rgba(0,0, 0, 0.8)'
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
})


export const BannerModalStyles = StyleSheet.create({
    bannerContainer: {
        padding: Platform.OS === 'ios' ? 40 : 30,
        paddingTop: Platform.OS === 'ios' ? 70 : 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    likeBtn: {
        width: ICONS_SIZE,
        height: ICONS_SIZE,
        tintColor: COLORS.white
    },
    isTogleeBtn: {
        tintColor: COLORS.red
    },
    closeShareArea: {
        flexDirection: "row"
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
})

export const IngredientsListStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: COLORS.secondary,
    },
    ingredientContainer:{
        padding: 20

    },
    ingredientContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20
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
})
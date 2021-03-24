import { StyleSheet } from 'react-native';

import { Theme } from './constants';
const { COLORS, FONTS } = Theme;

 const AppStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.secondary
    },
    textTitle:{
      color:COLORS.primary,
      ...FONTS.h3
      
    }
  });
export default AppStyles;
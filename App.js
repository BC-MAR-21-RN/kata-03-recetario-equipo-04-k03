import React from 'react';
import {StatusBar} from 'react-native';
import WithContext from './src/library/context';

import HomeScreen from './src/components/homeScreen';
import FoodModal from './src/components/modalScreen';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <HomeScreen />
      <FoodModal />
    </>
  );
}
export default WithContext(App);

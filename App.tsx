/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/* eslint-disable */

import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import CardScreen from './CardScreen';
function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text> Card </Text>
        <CardScreen />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;

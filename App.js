import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from "react-navigation";
import News from "./HomeScreen";
import SecondScreen from "./AboutScreen";


const navigationContainer = StackNavigator({
  News: { screen: News },
  SecondScreen: { screen: SecondScreen },
});
export default navigationContainer;

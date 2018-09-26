'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import PropertyView from './PropertyView';

const App = createStackNavigator({
    Home: { screen: SearchPage },
    Results: {screen:SearchResults},
    Property: { screen: PropertyView},
});
export default App;

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

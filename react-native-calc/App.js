import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './components/calculator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Calculator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

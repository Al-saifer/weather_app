import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import safeView from './src/helpers/safeView';

const App = () => {
  return (
    <View style={safeView.container}>
      <View style={styles.up}>
        <View style={styles.main}>
          <Text style={styles.temp}>27 degree celsius</Text>
        </View>
      </View>
      <View style={styles.down}>
        <View style={styles.secondary}>
          <Text style={styles.temp}>High: 30</Text>
          <Text style={styles.temp}>Low: 24</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  up: {
    flex: 1,
    backgroundColor: 'grey',
    flexDirection: 'row-reverse',
    paddingTop: 50,
  },
  main: {
    width: '60%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'red',
  },
  down: {
    flex: 1,
    backgroundColor: 'darkgrey',
    paddingTop: 50,
  },
  secondary: {
    width: '60%',
    height: '80%',
    backgroundColor: 'green',
  },
  temp: {
    fontSize: 30,
  },
});

export default App;

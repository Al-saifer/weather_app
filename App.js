import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import safeView from './src/helpers/safeView';

const App = () => {
  return (
    <View style={safeView.container}>
      <ImageBackground
        source={require('./assets/paper_texture.jpg')}
        style={styles.bgImage}
        resizeMode="cover"
      >
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  up: {
    flex: 1,
    flexDirection: 'row-reverse',
    paddingTop: 50,
  },
  main: {
    width: '60%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'hsla(100, 35%, 43%, 1)',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  down: {
    flex: 1,
    paddingTop: 50,
  },
  secondary: {
    width: '60%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsla(280, 66%, 58%, 1)',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  temp: {
    fontSize: 30,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;

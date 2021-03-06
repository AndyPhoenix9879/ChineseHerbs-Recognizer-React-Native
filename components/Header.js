import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';

const Header = () => {
  return (
    <View style={styles.Header}>
      <LinearTextGradient
        style={styles.h1}
        locations={[0, 1]}
        colors={['#ff4689', '#5200ff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text>MHW2102</Text>
      </LinearTextGradient>
      <LinearTextGradient
        style={styles.h2}
        locations={[0, 1]}
        colors={['#ff4689', '#5200ff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text>Herbs Recognizer</Text>
      </LinearTextGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundImage: 'linear-gradient(90deg, #ff4689, #5200ff)',
    backgroundSize: 100 / 2,
    backgroundPosition: 'center',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    marginTop: 50,
  },
  h1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 60,
  },
  h2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
  },
});

export default Header;

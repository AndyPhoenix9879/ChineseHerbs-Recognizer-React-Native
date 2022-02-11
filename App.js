import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
import FileButton from './components/FileButton';

const App = () => {
  const fileHandler = stuff => {
    console.log(stuff);
  };
  return (
    <View style={styles.container}>
      <Header />
      <FileButton onFile={fileHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    flex: 1,
  },
  text: {
    color: 'black',
  },
});

export default App;

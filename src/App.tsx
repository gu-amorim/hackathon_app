import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="default" />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

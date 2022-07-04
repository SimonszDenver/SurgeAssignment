
import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const App = () => {

  return (
    <View style={styles.screen}>
      <Text>Hello World!!!!</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;

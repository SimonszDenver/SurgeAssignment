
import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopRatedMoviesScreen from './screens/TopRatedMovies';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Top Rated Movies' component={TopRatedMoviesScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>

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

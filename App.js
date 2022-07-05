
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopRatedMoviesScreen from './screens/TopRatedMovies';
import MoviesContextProvider from './store/movies-context';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <>
      <StatusBar
        backgroundColor={'#0b253f'}
        barStyle="light-content" />
      <MoviesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#0b253f',
              },
              headerTintColor: 'white',
              contentStyle: {
                backgroundColor: '#fafafa'
              }
            }}
          >
            <Stack.Screen name='TopRatedMovies'
              component={TopRatedMoviesScreen}
              options={{
                title: "Top Rated Movies",
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </MoviesContextProvider>
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

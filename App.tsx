/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { Image, SafeAreaView, ScrollView, Settings, StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeStack from './AppScreens/MainScreens/HomeStack';
import AuthStack from './AppScreens/AuthScreens/AuthStack';
import { PaperProvider } from 'react-native-paper';
import LogoScreen from './AppScreens/LogoScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeStack from './AppScreens/MainScreens/HomeStack';
const MainStack = createNativeStackNavigator();



export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <PaperProvider>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191C26', justifyContent: 'center' }}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="LogoScreen">
          <MainStack.Screen name="LogoScreen" component={LogoScreen} options={{ headerShown: false }} />
          <MainStack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
          <MainStack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </PaperProvider>
    </GestureHandlerRootView>
  );
}


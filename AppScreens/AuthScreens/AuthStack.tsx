import * as React from 'react';
import {
  View,
  Text,
  Touchable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeLogin from './WelcomeLogin';
import SignInScreen from './SignInScreen';
import SetUserInfo from './SetUserInfo';
import ForgotPassword from './ForgotPassword';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Auth = createNativeStackNavigator();

const AuthStack = (props: any) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Auth.Navigator>
        <Auth.Screen
          name="WelcomeLogin"
          component={WelcomeLogin}
          options={{headerShown: false}}
        />
        <Auth.Screen
          name="SetUser"
          component={SetUserInfo}
          options={{headerShown: false}}
        />
        <Auth.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Auth.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
      </Auth.Navigator>
    </GestureHandlerRootView>
  );
};

export default AuthStack;

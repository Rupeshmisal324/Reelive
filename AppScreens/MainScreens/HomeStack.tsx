import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import Profile from './Profile';
import Notification from './Notification';
import SettingsScreen from './Settings';
import VideoPicker from './VideoPicker';
import HomeLive from './HomeLive';
import AudienceLive from './AudienceLive';
import HostLive from './HostLive';

const HomeStackNavigator = createNativeStackNavigator();

const HomeStack = () => {
  const navigation: any = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#191C26'}}>
      <HomeStackNavigator.Navigator initialRouteName="HomeLive">
        <HomeStackNavigator.Screen
          name="HomeLive"
          component={HomeLive}
          options={{headerShown: false}}
        />
        <HomeStackNavigator.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <HomeStackNavigator.Screen
          name="HostLive"
          component={HostLive}
          options={{headerShown: false}}
        />
        <HomeStackNavigator.Screen
          name="AudienceLive"
          component={AudienceLive}
          options={{headerShown: false}}
        />
        <HomeStackNavigator.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <HomeStackNavigator.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <HomeStackNavigator.Screen
          name="Settings"
          component={SettingsScreen}
          options={{headerShown: false}}
        />

        <HomeStackNavigator.Screen
          name="VideoPicker"
          component={VideoPicker}
          options={{headerShown: false}}
        />
      </HomeStackNavigator.Navigator>

      <View
        style={{
          marginBottom: 0,
          backgroundColor: '#DFE4EA',
          height: 70,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon name="home" size={40} color="#2c2c54" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeLive');
          }}>
          <Icon name="camera" size={40} color="#2c2c54" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('VideoPicker');
          }}>
          <Icon name="upload" size={40} color="#2c2c54" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Icon name="account-circle" size={40} color="#2c2c54" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeStack;

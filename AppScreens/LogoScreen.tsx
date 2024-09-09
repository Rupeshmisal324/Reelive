import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'user1',
  encryptionKey: 'LinKup',
});

const LogoScreen = ({navigation}: any) => {
  const [progress, setProgress] = useState(0);
  const [userExists, setUserExists] = useState(false);

  const checkUserData = () => {
    const username = storage.getString('user.name');
    const email = storage.getString('user.email');

    if (username && email) {
      setUserExists(true);
    } else {
      setUserExists(false);
    }
  };

  useEffect(() => {
    checkUserData();
    const checkInternetConnection = async () => {
      const state = await NetInfo.fetch();
      if (state.isConnected) {
      } else {
        Alert.alert(
          'No Internet',
          'Please check your internet connection and try again.',
        );
      }
    };

    const timer = setTimeout(() => {
      checkInternetConnection();
      setProgress(100);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      if (userExists) {
        navigation.navigate('HomeStack', {screen: 'Home'});
      } else {
        navigation.navigate('AuthStack');
      }
    }
  }, [progress, userExists, navigation]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#dfe4ea'}}>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../Resources/Images/LinKupLOGO.png')}
          style={{height: 150, width: 150, margin: 10, borderRadius: 20}}
        />
        <Text style={{fontSize: 20, color: '#ffa801', fontWeight: '500'}}>
          "Your Reel, Your Live, Your Moment!"
        </Text>
        <View style={styles.progressBar}>
          <View style={[styles.progress, {width: `${progress}%`}]} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 10,
    width: '80%',
    backgroundColor: '#555',
    borderRadius: 5,
    margin: 20,
  },
  progress: {
    height: 10,
    backgroundColor: '#ffa502',
    borderRadius: 5,
  },
});

export default LogoScreen;

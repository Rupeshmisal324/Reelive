import React, {useEffect, useState} from 'react';
import {Button, View, StyleSheet, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomeScreen from '../../CustomComponents/CustomScreen';

export default function HomeLive(props: any) {
  const navigation = useNavigation();

  const onJoinPress = (isHost: boolean) => {
    navigation.navigate(isHost ? 'HostLive' : 'AudienceLive', {
      userID: userID,
      userName: userID,
      liveID: liveID,
    });
  };

  const [userID, setUserID] = useState('');
  const [liveID, setLiveID] = useState('');

  useEffect(() => {
    setUserID(String(Math.floor(Math.random() * 10000)));
    setLiveID(String(Math.floor(Math.random() * 10000)));
  }, []);

  return (
    <>
      <View style={{flex: 1}}>
        <CustomeScreen
          ScreenName={'User '}
          style={{TextMargin: 40}}
          imagePath={require('../../Resources/Images/live.png')}
          SecondIcon={false}
          ScreenLogo={true}
          IconName={''}
        />
      </View>

      <View style={[styles.container]}>
        <Text style={styles.userID}>Your User ID: {userID}</Text>
        <Text style={[styles.liveID]}>Live ID:</Text>
        <TextInput
          placeholder="Enter the Live ID. e.g. 6666"
          style={[styles.input]}
          onChangeText={text => setLiveID(text.replace(/[^0-9A-Za-z_]/g, ''))}
          maxLength={4}
          value={liveID}></TextInput>

        <View style={[styles.buttonLine]}>
          <CustomButton
            title={'Start a live'}
            style={{height: 50, width: '80%'}}
            color1="#ffa502"
            color2="#ffa502"
            onp={() => {
              onJoinPress(true);
            }}
          />
          <CustomButton
            title={'Watch a live'}
            style={{height: 50, width: '80%'}}
            color1="#ffa502"
            color2="#ffa502"
            onp={() => {
              onJoinPress(false);
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DFE4EA',
  },
  buttonLine: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
    width: 350,
    padding: 10,
  },
  buttonSpacing: {
    width: 50,
  },
  input: {
    height: 42,
    width: 305,
    borderWidth: 3,
    borderRadius: 9,
    borderColor: '#009432',
    paddingLeft: 130,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  userID: {
    fontSize: 18,
    color: '#2A2A2A',
    marginBottom: 25,
    justifyContent: 'center',
  },
  liveID: {
    fontSize: 18,
    color: '#2A2A2A',
    marginBottom: 5,
  },
  simpleCallTitle: {
    color: '#2A2A2A',
    fontSize: 21,
    width: 330,
    fontWeight: 'bold',
    marginBottom: 27,
  },
  button: {
    height: 51,
    borderRadius: 10,
    backgroundColor: '#e67e22',
  },
});

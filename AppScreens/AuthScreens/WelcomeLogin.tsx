import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomButton from '../../CustomComponents/CustomButton';

import {useNavigation} from '@react-navigation/native';

export type Props = {};
const WelcomeLogin = (props: Props) => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <View style={{flex: 1, alignItems: 'center', marginTop: '10%'}}>
        <View style={styles.card}>
          <Image
            source={require('../../Resources/Images/LinKupLOGO.png')}
            style={{height: 150, width: 150, borderRadius: 20}}
          />
        </View>
        <View style={{flex: 1, alignSelf: 'center', width: '100%'}}>
          <View style={{marginBottom: 20}}>
            <Text style={styles.BigText}>Welcome to </Text>
            <Text style={styles.BigText}>LinKup</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 18, color: '#009432', textAlign: 'center'}}>
              {' '}
              "Reel the Moment, Live the Connection!"
            </Text>
            <Text style={{fontSize: 18, color: '#009432', textAlign: 'center'}}>
              {' '}
              Where Connections Come to Life and connect the world without
              hesitation.
            </Text>
          </View>

          <CustomButton
            title={'Register'}
            style={{height: 50, width: '80%'}}
            color1="#ffa502"
            color2="#ffa502"
            onp={() => {
              navigation.navigate('SetUser');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#DFE4EA',
  },

  card: {
    height: 150,
    width: 150,
    backgroundColor: '#111319',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },

  BigText: {
    fontSize: 30,
    color: '#009432',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default WelcomeLogin;

// {navigation.navigate('HomeStack',{ Screen:'Home'}}

import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import CustomeScreen from '../../CustomComponents/CustomScreen';
import CustomInput from '../../CustomComponents/CustomInput';
import CustomButton from '../../CustomComponents/CustomButton';

const Profile = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={{flex: 1, backgroundColor: '#DFE4EA'}}>
        <View style={{flex: 1}}>
          <CustomeScreen
            ScreenName={'Profile'}
            style={{TextMargin: 60}}
            imagePath={require('../../Resources/Images/private-account.png')}
            SecondIcon={false}
            ScreenLogo={true}
            IconName={''}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Rupesh misal
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#4DE0D9',
              textAlign: 'center',
            }}>
            User name: <Text style={{color: '#FE8270'}}>rupeshmisal0324</Text>
          </Text>
        </View>
        <View style={{flex: 4, marginTop: 20}}>
          <CustomInput
            iconName={'address-card'}
            secureText={false}
            placeholderText={'Rupesh misal'}
            typing={() => {}}
            keyboardType={'default'}
            IconColor={'#ffffff'}
            value={''}
          />
          <CustomInput
            iconName={'mobile-phone'}
            secureText={false}
            placeholderText={'9921430375'}
            typing={() => {}}
            keyboardType={'default'}
            IconColor={'#ffffff'}
            value={''}
          />
          <CustomInput
            iconName={'mail-forward'}
            secureText={false}
            placeholderText={'misalrupesh@gmail.com'}
            typing={() => {}}
            keyboardType={'default'}
            IconColor={'#ffffff'}
            value={''}
          />
          <CustomInput
            iconName={'address-book'}
            secureText={false}
            placeholderText={'Moshi,Pune'}
            typing={() => {}}
            keyboardType={'default'}
            IconColor={'#ffffff'}
            value={''}
          />
          <CustomButton
            title={'Save now'}
            style={{width: '80%', fontsize: 24}}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Profile;

import React, {useEffect, useState} from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CustomeScreen from '../../CustomComponents/CustomScreen';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomInput from '../../CustomComponents/CustomInput';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = (prop: any) => {
  const navigation = useNavigation();

  const [inputText, setInputText] = useState('');
  const [showInfoText, SetShowInfoText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log('input =', inputText);
    }, 1000);
  }, [inputText]);

  const maskEmail = (email: any) => {
    let [username, domain] = email.split('@');
    if (username.length > 6) {
      let maskedUsername =
        username.slice(0, 3) +
        '*'.repeat(username.length - 6) +
        username.slice(-3);
      return maskedUsername + '@' + domain;
    } else {
      let maskedUsername =
        username[0] + '*'.repeat(username.length - 2) + username.slice(-1);
      return maskedUsername + '@' + domain;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={{flex: 1, backgroundColor: '#DFE4EA'}}>
        <View style={{flex: 1}}>
          <CustomeScreen
            ScreenName={'Forgot Password'}
            imagePath={require('../../Resources/Images/ForgetPasswLogo.png')}
            SecondIcon={false}
            ScreenLogo={false}
            IconName={''}
          />
        </View>

        <View style={{flex: 2, marginTop: '10%'}}>
          <Text style={styles.Text}>
            Choose a secure password that will be{'\n'}easy for you to
            remember..
          </Text>
          <CustomInput
            iconName={'envelope'}
            placeholderText={'abcd@gmail.com'}
            secureText={false}
            typing={(text: any) => {
              setInputText(text);
            }}
            keyboardType={'email-address'}
            IconColor={'#FE8270'}
          />

          {showInfoText ? (
            <Text style={styles.infoText}>
              {' '}
              Email set to {maskEmail(inputText)}{' '}
            </Text>
          ) : null}
          <CustomButton
            title={'Continue'}
            onp={() => {
              SetShowInfoText(true);
            }}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  Text: {
    margin: 10,
    color: '#009432',
    fontSize: 18,
    alignSelf: 'center',
  },

  infoText: {
    margin: 10,
    color: '#FE8270',
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default ForgotPassword;

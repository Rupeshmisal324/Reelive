import React, {useMemo, useRef, useState, useCallback} from 'react';
import {
  Alert,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CustomeScreen from '../../CustomComponents/CustomScreen';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomInput from '../../CustomComponents/CustomInput';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MMKV} from 'react-native-mmkv';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';

export const storage = new MMKV({
  id: 'user1',
  encryptionKey: 'LinKup',
});

const countries = [
  {label: 'USA', value: 'usa'},
  {label: 'Canada', value: 'canada'},
  {label: 'India', value: 'in'},
  {label: 'Australia', value: 'australia'},
  {label: 'United Kingdom', value: 'uk'}
];
const states = [
  {label: 'California', value: 'california', country: 'usa'},
  {label: 'Texas', value: 'texas', country: 'usa'},
  {label: 'New York', value: 'new_york_state', country: 'usa'},
  {label: 'Ontario', value: 'ontario', country: 'canada'},
  {label: 'British Columbia', value: 'british_columbia', country: 'canada'}
];

const cities = [
  {label: 'Los Angeles', value: 'los_angeles', state: 'california'},
  {label: 'San Francisco', value: 'san_francisco', state: 'california'},
  {label: 'Houston', value: 'houston', state: 'texas'},
  {label: 'Dallas', value: 'dallas', state: 'texas'},
  {label: 'New York City', value: 'new_york_city', state: 'new_york_state'}
];

const SetUserInfo = (props: any) => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['20%', '30%'], []);

  const [username, setUsername] = useState('');
  const [emailid, setEmailid] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [openCountry, setOpenCountry] = useState(false);
  const [openState, setOpenState] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const [countryItems, setCountryItems] = useState(countries);
  const [stateItems, setStateItems] = useState(states);
  const [cityItems, setCityItems] = useState(cities);
  const [password, setPassword] = useState('');
  
  const hasnumber = (text: string) => {
    const regex = /[1-9]/;
    return regex.test(text);
  };

  const check8CharLen = (text: string) => {
    return text.length >= 8;
  };

  const hasUppercaseOrSymbol = (text: string) => {
    const regex = /[A-Z!@#$%^&*(),.?":{}|<>]/;
    return regex.test(text);
  };


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordLengthPattern = /.{8,}/;
  const passwordUppercasePattern = /[A-Z]/;
  const passwordSymbolPattern = /[^A-Za-z0-9]/;
  const passwordNumberPattern = /[0-9]/;

  const validateInputs = () => {
    if (!username.trim()) {
      Alert.alert('Validation Error', 'Please enter a username.');
      return false;
    }

    if (!emailPattern.test(emailid)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return false;
    }

    if (!passwordLengthPattern.test(password)) {
      Alert.alert(
        'Validation Error',
        'Password must be at least 8 characters long.',
      );
      return false;
    }

    if (!passwordUppercasePattern.test(password)) {
      Alert.alert(
        'Validation Error',
        'Password must contain at least one uppercase letter.',
      );
      return false;
    }

    if (!passwordSymbolPattern.test(password)) {
      Alert.alert(
        'Validation Error',
        'Password must contain at least one symbol.',
      );
      return false;
    }

    if (!passwordNumberPattern.test(password)) {
      Alert.alert(
        'Validation Error',
        'Password must contain at least one number.',
      );
      return false;
    }

    return true;
  };

  const handleContinue = () => {
    if (validateInputs()) {
      SetData();
      bottomSheetRef.current?.expand();
    }
  };

  const handleCountryChange = useCallback(
    (value: string | null) => {
      setSelectedCountry(value);
      setSelectedCity(null);
      setCityItems(cities);
    },
    [setSelectedCountry, setCityItems],
  );

  const handleStateChange = useCallback(
    (value: string | null) => {
      setSelectedState(value);
    },
    [setSelectedState],
  );

  const handleCloseBottomSheet = () => {
    bottomSheetRef.current?.close();
    navigation.navigate('SignIn');
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{flex: 1, backgroundColor: '#DFE4EA'}}>
          <View style={{flex: 2}}>
            <CustomeScreen
              ScreenName={'User Info'}
              style={{TextMargin: 40}}
              imagePath={require('../../Resources/Images/customer.png')}
              SecondIcon={false}
              ScreenLogo={true}
              IconName={''}
            />
          </View>

          <View style={{flex: 2}}>
            <Text style={styles.headerText}>Set User Information</Text>

            <CustomInput
              iconName={'user'}
              secureText={false}
              placeholderText={'username'}
              style={{backgroundColor: '#111319'}}
              typing={setUsername}
              keyboardType={'default'}
              IconColor={'#FE8270'}
              value={username}
            />

            <CustomInput
              iconName={'envelope'}
              placeholderText={'e-mail'}
              secureText={false}
              style={{backgroundColor: '#111319'}}
              typing={setEmailid}
              keyboardType={'email-address'}
              IconColor={'#FE8270'}
              value={emailid}
            />

            <View style={styles.dropdownWrapper}>
              <DropDownPicker
                open={openCountry}
                value={selectedCountry}
                items={countryItems}
                setOpen={setOpenCountry}
                setValue={handleCountryChange}
                setItems={setCountryItems}
                placeholder="Select a country"
                style={styles.dropdown}
                listItemLabelStyle={styles.listItemLabelStyle}
                dropDownContainerStyle={styles.dropdownContainer}
                textStyle={styles.textStyle}
                zIndex={3000}
                zIndexInverse={1000}
                dropDownDirection="AUTO"
              />
              <DropDownPicker
                open={openState}
                value={selectedState}
                items={stateItems}
                setOpen={setOpenState}
                setValue={handleStateChange}
                setItems={setStateItems}
                placeholder="Select a State"
                style={styles.dropdown}
                listItemLabelStyle={styles.listItemLabelStyle}
                dropDownContainerStyle={styles.dropdownContainer}
                textStyle={styles.textStyle}
                zIndex={2000}
                zIndexInverse={2000}
                dropDownDirection="AUTO"
              />
              <DropDownPicker
                open={openCity}
                value={selectedCity}
                items={cityItems}
                setOpen={setOpenCity}
                setValue={setSelectedCity}
                setItems={setCityItems}
                placeholder="Select a city"
                style={styles.dropdown}
                listItemLabelStyle={styles.listItemLabelStyle}
                dropDownContainerStyle={styles.dropdownContainer}
                textStyle={styles.textStyle}
                zIndex={1000}
                zIndexInverse={3000}
                dropDownDirection="AUTO"
              />
            </View>

            <CustomInput
              iconName="calendar"
              placeholderText="Date of Birth"
              secureText={false}
              style={{backgroundColor: '#111319'}}
              typing={() => {}}
              IconColor="#FE8270"
              value={''}
              keyboardType={'default'}
            />
            <View>
              <CustomInput
                iconName="eye"
                placeholderText={'Password'}
                secureText={true}
                typing={setPassword}
                keyboardType={'default'}
                IconColor={'#FE8270'}
                style={{backgroundColor: '#111319'}}
                value={password}
              />
              <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: check8CharLen(password) ? '#009432' : '#ffffff',
                }}>
                <Icon
                  name="check"
                  size={20}
                  color={check8CharLen(password) ? '#009432' : '#ffffff'}
                />{' '}
                Has at least 8 characters
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: hasUppercaseOrSymbol(password) ? '#009432' : '#ffffff',
                }}>
                <Icon
                  name="check"
                  size={20}
                  color={hasUppercaseOrSymbol(password) ? '#009432' : '#ffffff'}
                />{' '}
                Has uppercase letters or symbol
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: hasnumber(password) ? '#009432' : '#ffffff',
                }}>
                <Icon
                  name="check"
                  size={20}
                  color={hasnumber(password) ? '#009432' : '#ffffff'}
                />{' '}
                Has a number
              </Text>
            </View>
              <CustomButton title={'Continue'} onp={handleContinue} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={{backgroundColor: '#485460'}}>
        <View style={styles.bottomSheetContent}>
          <Text style={styles.congratulationsText}>Congratulations!</Text>
          <Text style={styles.congratulationsText2}>
            Your information has been saved successfully.
          </Text>
          <CustomButton title={'Close'} onp={handleCloseBottomSheet} />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111319',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
  },
  dropdownWrapper: {
    marginTop: 10,
    marginBottom: 20, // Adds space between dropdowns to prevent overlap
    paddingHorizontal: 20, // Adds padding to the sides for consistent spacing
  },
  dropdown: {
    marginTop: 20,
    fontSize: 20,
    backgroundColor: '#111319',
    height: 50,
    borderRadius: 30,
    width: '80%',
    alignSelf: 'center',
    color: '#ffffff',
  },
  dropdownContainer: {
    marginTop: 2,
    fontSize: 20,
    borderRadius: 20,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#009432',
  },
  listItemLabelStyle: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },
  bottomSheetContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  congratulationsText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  congratulationsText2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default SetUserInfo;

function SetData() {
  // Implement your logic to save the data here
  console.log('Data saved successfully!');
}

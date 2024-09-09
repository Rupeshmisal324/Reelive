import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import CustomeScreen from '../../CustomComponents/CustomScreen';
import CustomeNavigationComp from '../../CustomComponents/CustomNavigationComp';

const Notification = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#DFE4EA'}}>
      <View style={{flex: 1}}>
        <CustomeScreen
          ScreenName={'Notification'}
          style={{TextMargin: 20}}
          SecondIcon={false}
          ScreenLogo={false}
          imagePath={'undefined'}
          IconName={'undefined'}
        />
      </View>
      <TouchableOpacity style={{flex: 12, marginTop: 25, borderRadius: 20}}>
        <CustomeNavigationComp
          LeftIcon={'bell'}
          LeftIconColor={'#4DE0D9'}
          LeftIconSize={30}
          RightIcon={'caret-right'}
          RightIconColor={'#DFE4EA'}
          RightIconSize={30}
          title={'Hello Rupesh, Welcme to LinKup !'}
          style={{fontsize: 20, height: 60}}
          changeItem={false}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Notification;

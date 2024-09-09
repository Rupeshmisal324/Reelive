import React, {useState, useRef, useMemo} from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';

const UploadScreen = () => {
  const navigation = useNavigation();
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['30%'], []);

  // Function to handle the selection of the reel from the gallery
  const selectReel = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'video', // Specifies that only videos should be selectable
        quality: 1,
      });

      if (result.didCancel || !result.assets) {
        console.log('User cancelled image picker');
        return;
      }

      // Call function to upload the selected reel
      uploadReel(result.assets[0]);
    } catch (error) {
      console.error('Error selecting reel:', error);
      Alert.alert('Error', 'Failed to select reel');
    }
  };

  // Function to upload the selected reel to Firebase Storage
  const uploadReel = async (file: any) => {
    const {uri} = file;
    const filename = uri.substring(uri.lastIndexOf('/') + 1); // Extract filename from URI
    const storageRef = storage().ref(`reels/${filename}`); // Reference to Firebase Storage location

    setUploading(true);
    setTransferred(0);

    const task = storageRef.putFile(uri); // Create an upload task

    // Listen for state changes in the upload task
    task.on('state_changed', snapshot => {
      // Calculate and update the upload progress
      setTransferred(
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
      );
    });

    try {
      await task; // Await the task to finish
      setUploading(false);
      bottomSheetRef.current?.expand(); // Open the bottom sheet after a successful upload
    } catch (error) {
      console.error('Error uploading reel:', error);
      setUploading(false);
      Alert.alert('Error', 'Failed to upload reel.');
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        {uploading ? (
          <View style={styles.uploadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>{transferred}% Completed!</Text>
          </View>
        ) : (
          <Button title="Select and Upload Reel" onPress={selectReel} />
        )}
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={{backgroundColor: '#485460'}}>
        <View style={styles.bottomSheetContent}>
          <Text style={styles.congratulationsText}>
            Go to home to watch reels
          </Text>
          <Button
            title="Go to Home"
            onPress={() => {
              navigation.navigate('Home');
              // You will need to use your navigation prop or hook here
            }}
          />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  uploadingContainer: {justifyContent: 'center', alignItems: 'center'},
  bottomSheetContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  congratulationsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default UploadScreen;

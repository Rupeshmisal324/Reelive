import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import storage from '@react-native-firebase/storage';
import Video from 'react-native-video'; // Add this import if you are using react-native-video

const HomeScreen = () => {
  const navigation = useNavigation();
  const [reels, setReels] = useState([]);

  // Fetch reels from Firebase Storage
  useEffect(() => {
    const fetchReels = async () => {
      try {
        const reelList = await storage().ref('reels/').listAll();
        const urls = await Promise.all(
          reelList.items.map(item => item.getDownloadURL()),
        );
        setReels(urls);
      } catch (error) {
        console.error('Failed to fetch reels:', error);
        Alert.alert('Error', 'Failed to load reels');
      }
    };

    fetchReels();
  }, []);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Settings')}>
            <Ionicons name="settings" size={30} color="#009432" />
          </TouchableOpacity>
          <Text style={styles.title}>LinKup</Text>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Notification')}>
            <Ionicons name="home" size={30} color="#009432" />
          </TouchableOpacity>
        </View>

        {/* Reels List */}
        <View style={{padding: 10}}>
          <FlatList
            data={reels}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={{marginBottom: 20}}>
                {/* Use Video component for video files */}
                <Video
                  source={{uri: item}}
                  style={{width: '100%', height: 600}}
                  resizeMode="cover"
                  repeat={false}
                  controls={true}
                />
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFE4EA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '3%',
  },
  iconButton: {
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#009432',
    textAlign: 'center',
  },
  scrollView: {
    flex: 4,
  },
});

export default HomeScreen;

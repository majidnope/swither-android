/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
// import {Alert, PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import {
  SafeAreaView,
  StatusBar,
  Text,
  // Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // Inside a suitable component or in the app initialization code
  const getFCMRegistrationToken = async () => {
    const authorizationStatus = await messaging().requestPermission();

    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      const token = await messaging().getToken();
      console.log('FCM Registration Token:', token);
      // Handle the token as needed (e.g., store it locally, send it to your server)
    }
  };
  useEffect(() => {
    getFCMRegistrationToken();
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.darker} />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 21}}>Switcher</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

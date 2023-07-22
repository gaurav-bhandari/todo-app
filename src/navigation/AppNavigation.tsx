import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Onboarding from '@src/containers/Onboarding';
import SignUp from '@src/containers/SignUp';
import Otp from '@src/containers/Otp';
import UserDetails from '@src/containers/UserDetails';
import Home from '@src/containers/Home';
import CreateTask from '@src/containers/CreateTask';
import {AuthStackParamList, MainStackParamList} from '@src/navigation/types';
import {useAppSelector} from '@src/redux/hooks';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const MainStack = createNativeStackNavigator<MainStackParamList>();

const AuthStackScreens = () => (
  <AuthStack.Navigator
    initialRouteName="Onboarding"
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen name="Onboarding" component={Onboarding} />

    <AuthStack.Screen name="SignUp" component={SignUp} />

    <AuthStack.Screen name="Otp" component={Otp} />
  </AuthStack.Navigator>
);

const MainStackScreens = () => (
  <MainStack.Navigator
    initialRouteName="UserDetails"
    screenOptions={{
      headerShown: false,
    }}>
    <MainStack.Screen name="UserDetails" component={UserDetails} />

    <MainStack.Screen name="Home" component={Home} />

    <MainStack.Screen name="CreateTask" component={CreateTask} />
  </MainStack.Navigator>
);

const AppNavigation = () => {
  const [token, setToken] = useState('');
  const phoneState = useAppSelector(state => state.phone);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // value previously stored
        setToken(value);
      }
    } catch (e) {
      console.log(e, 'err');
    }
  };

  return (
    <NavigationContainer>
      {!token || !phoneState.token ? (
        <MainStackScreens />
      ) : (
        <AuthStackScreens />
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;

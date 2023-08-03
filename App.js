import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import GetStartedScreen from './GetStartedScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import ForgotPasswordCodeScreen from './ForgotPasswordCodeScreen';
import NewPassword from './NewPassword';
import SignupScreen from './Signup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="JailTrack Get Started" component={GetStartedScreen} />
        <Stack.Screen name="JailTrack Login" component={LoginScreen} />
        <Stack.Screen name="JailTrack Forgot Password" component={ForgotPasswordScreen} />
        <Stack.Screen name="JailTrack Forgot Password Code" component={ForgotPasswordCodeScreen} />
        <Stack.Screen name="JailTrack New Password" component={NewPassword} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

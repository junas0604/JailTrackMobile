// LoginScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    if (!username) {
      setUsernameError('Please Enter a Username');
    } else if (!isValidEmail(username)) {
      setUsernameError('Please Enter Valid Email Address');
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Please Enter Password');
    } else {
      setPasswordError('');
    }

    if (username && password) {
      // Here you can implement the login logic using the username (which is treated as an email), and password.
      // For example, you can make an API call to authenticate the user.
      console.log('Username (Email):', username);
      console.log('Password:', password);
    }
  };


  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  const isValidEmail = (email) => {
    // Simple email validation regex pattern
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  };

  

  const handleForgotPassword = () => {
    // Redirect to ForgotPasswordScreen
    navigation.navigate('JailTrack Forgot Password');
  };

  return (
    <ImageBackground
      source={require('./Pictures/Background.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TextInput
          label="Username (Email)"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        />
        {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

        <TextInput
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={handleLogin}
            backgroundColor="#87CEEB"
            style={styles.button}
          >
            Login
          </Button>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an Account?</Text>
          <Text style={styles.signUpLink} onPress={handleSignUp}>
            Sign Up
          </Text>
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText} onPress={handleForgotPassword}>
            Forgot Password?
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 50,
  },
  button: {
    padding: 10,
    color: '#189DE4',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: '#FFFFFF',
    marginRight: 5,
  },
  signUpLink: {
    color: '#189DE4',
    textDecorationLine: 'underline',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#189DE4',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 5,
  },
});

export default LoginScreen;

import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, StatusBar, TouchableOpacity, Image } from 'react-native';
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
      console.log('Username (Email):', username);
      console.log('Password:', password);
      navigation.navigate('Dashboard');
    }
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  const handleForgotPassword = () => {
    navigation.navigate('JailTrack Forgot Password');
  }

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  };

  

  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require('./Pictures/Background.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <StatusBar backgroundColor="black" />

          <View style={styles.inputContainer}>
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
          </View>
          
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText} onPress={handleForgotPassword}>
              Forgot Password?
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#00000040',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 40,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    shadowColor: 'black',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 30,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
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
  menuBar: {
    padding: 10,
  },
  sidebarImage: {
    width: 30,
    height: 30,
  },
});

export default LoginScreen;
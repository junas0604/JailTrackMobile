import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordCodeScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');

  const handleContinue = () => {
    // Check if the code is valid (4-digit number)
    const isValidCode = /^\d{4}$/.test(code);

    if (isValidCode) {
      // Redirect to LoginScreen
      navigation.navigate('JailTrack New Password');
    } else {
      // Code is invalid, handle validation error (you can display an error message or alert here)
      alert('Please enter a 4-digit code.');
    }
  };

  return (
    <ImageBackground source={require('./Pictures/Background.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Enter the 4-digit code:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setCode(text)}
              value={code}
              keyboardType="number-pad"
              maxLength={4}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
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
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add some opacity to the container background color
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white', // Add text color for visibility against the background image
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 150,
  },
  continueButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordCodeScreen;

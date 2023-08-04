import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Text } from 'react-native';

const NewPassword = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (newPassword.trim() === '' || confirmPassword.trim() === '') {
      setError('Please fill in all fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Add more validation logic here if needed, e.g., minimum length, complex criteria

    // If all validations pass, you can proceed to handle the password change
    // For example, you can make an API call to update the password
    // If successful, you can navigate to the next screen
    navigation.navigate('JailTrack Login'); // Replace 'SomeOtherScreen' with the screen you want to navigate to after password change
  };

  return (
    <ImageBackground source={require('./Pictures/Background.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Continue and Login" onPress={handleContinue} />
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
    padding: 16,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default NewPassword;

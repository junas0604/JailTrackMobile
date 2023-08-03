import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';

const SignupScreen = (navigation) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rank, setRank] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (!firstName.trim()) {
      showAlert('Please Enter First Name');
    } else if (!lastName.trim()) {
      showAlert('Please Enter Last Name');
    } else if (!email.trim()) {
      showAlert('Please Enter Email Address');
    } else if (!phone.trim()) {
      showAlert('Please Enter Phone Number');
    } else if (!rank.trim()) {
      showAlert('Please Enter Rank/Position');
    } else if (!password.trim()) {
      showAlert('Please Enter Password');
    } else if (password !== confirmPassword) {
      showAlert('Passwords do not match');
    } else {
      // Perform the signup logic here (e.g., API call or other operations)
      showAlert('Signup successful!');
      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setRank('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  const showAlert = (message) => {
    Alert.alert('Error', message);
  };

  return (
    <ImageBackground source={require('./Pictures/Background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={[styles.input, { color: 'white' }]}
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={[styles.input, { color: 'white' }]}
          placeholder="Enter Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={[styles.input, { color: 'white' }]}
          placeholder="Enter Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={[styles.input, { color: 'white' }]}
          placeholder="Enter Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />

        <Text style={styles.label}>Rank/Position</Text>
        <TextInput
          style={[styles.input, { color: 'white' }]}
          placeholder="Enter Rank/Position"
          value={rank}
          onChangeText={(text) => setRank(text)}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[styles.input, { color: 'white' }]}
          placeholder="Enter Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={[styles.input, { color: 'white' }]}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color:'white',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default SignupScreen;

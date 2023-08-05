import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { initializeApp } from '@react-native-firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './config/firebase';
import { addDoc, collection } from "firebase/firestore";

// Initialize Firebase

const SignupScreen = ({ navigation }) => {
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [rank, setRank] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const CollectionRef = collection(db, "JailOfficer")

  const handleSignup = async () => {
    if (!fullName.trim() || !email.trim() || !phoneNumber.trim() || !rank.trim() || !password.trim() || !confirmPassword.trim()) {
      showAlert('Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      showAlert('Passwords do not match');
      return;
    }

      try {
          await addDoc(CollectionRef, { email: email, fullName: fullName, password: password, phoneNumber: phoneNumber, rank: rank })
      } catch (err) {
          console.error(err)
      }

	showAlert('Signup successful!');
      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setRank('');
      setPassword('');
      setConfirmPassword('');

  };

  const showAlert = (message) => {
    Alert.alert('Error', message);
  };

  return (
    <ImageBackground source={require('./Pictures/Background.png')} style={styles.background}>
      <View style={styles.container}>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={[styles.input, { color: 'white' }]}
          placeholder="Enter Fullname"
          value={fullName}
          onChangeText={(text) =>setfullName(text)}
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
          value={phoneNumber}
          onChangeText={(text) => setphoneNumber(text)}
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

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { auth, db } from './config/firebase';
import { addDoc, collection } from "firebase/firestore";

// Initialize Firebase

const SignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rank, setRank] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const CollectionRef = collection(db, "JailOfficer")
  const CollectionRef1 = collection(db, "JailTrack")

  const handleSignup = async () => {
    if (!fullName.trim() || !email.trim() || !phoneNumber.trim() || !rank.trim() || !password.trim() || !confirmPassword.trim()) {
      showAlert('Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      showAlert('Passwords do not match');
      return;
    }

    // Add verification for existence of fields
    if (!fullName || !phoneNumber || !rank || !password || !email) {
      showAlert('Please provide all the required information.');
      return;
    }

    try {
      await addDoc(CollectionRef1,{
        email: email,
        fullName: fullName,
        password: password,
        phoneNumber: phoneNumber,
        rank: rank,
      });
      
      await addDoc(CollectionRef,{
        email: email,
        fullName: fullName,
        password: password,
        phoneNumber: phoneNumber,
        rank: rank,
      });
    } catch (err) {
      showAlert('Please provide all the required information.');
      showAlert('Signup failed. Please try again.');
      return;
    }

    showAlert('Signup successful!');
    // Reset form fields
    setFullName('');
    setEmail('');
    setPhoneNumber('');
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
          onChangeText={(text) => setFullName(text)}
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
          onChangeText={(text) => setPhoneNumber(text)}
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

import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button, Text } from 'react-native-paper';

const GetStartedScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('JailTrack Login');
  };

  return (
    <ImageBackground
      source={require('./Pictures/Background.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to JailTrack</Text>
        <Text style={styles.subHeading}>Get Started Now!</Text>
        <Button mode="contained" onPress={handleGetStarted}>
          Get Started
        </Button>
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
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 32,
    color: '#fff',
  },
});

export default GetStartedScreen;

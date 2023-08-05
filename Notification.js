import React from 'react';
import { View, StyleSheet, ImageBackground, StatusBar, TouchableOpacity, Image, TextInput, Text } from 'react-native';

const Notification = ({ navigation }) => {
  const messages = [
    "Your request to file a leave was approved!",
    "Your request to file a leave was not approved!",
    "Your request to swap schedule was approved!",
    "Your account request was approved!",
  ];

  const handleSidebar = () => {
    navigation.navigate('Sidebar');
  };

  const handleStatusBarClick = () => {
    handleSidebar();
  };

  return (
    <ImageBackground source={require('./Pictures/Background.png')} style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleStatusBarClick} style={styles.menuBar}>
          <Image source={require('./Pictures/Sidebar.png')} style={styles.sidebarImage} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>JailTrack</Text>
      </View>
      <View style={styles.container}>
        {messages.map((message, index) => (
          <TextInput key={index} value={message} style={styles.textInput} editable={false} />
        ))}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mark All As Read</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
    marginTop: 50, // Adjust the spacing to align with the header
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white', // Set the background color to white
  },
  button: {
    backgroundColor: '#146CA4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 60,
    marginTop: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#292525',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20, // Adjust the spacing to align with the menuBar icon
  },
  menuBar: {
    padding: 10,
  },
  sidebarImage: {
    width: 30,
    height: 30,
  },
});

export default Notification;

import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FileNotifRequest = ({ navigation }) => {
  const handleSidebar = () => {
    navigation.navigate('Sidebar');
  };

  const handleStatusBarClick = () => {
    handleSidebar();
  };

  const handleSendClick = () => {
    navigation.navigate('FileShiftChange');
  };

  return (
    <ImageBackground source={require('./Pictures/Background.png')} style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleStatusBarClick} style={styles.menuBar}>
          <Image source={require('./Pictures/Sidebar.png')} style={styles.sidebarImage} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>JailTrack</Text>
      </View>
      <View style={styles.pageContainer}>
        <View style={styles.container}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Requests Notifications</Text>
          </View>
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationTextGreen}>JO1 Junas Gutib Approved</Text>
            <Text style={styles.notificationTextRed}>JO1 Junas Gutib, Canceled</Text>
            <Text style={styles.notificationTextGreen}>JO1 Junas Gutib, Approved</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleSendClick} style={styles.sendContainer}>
          <Image source={require('./Pictures/send.png')} style={styles.sendImage} />
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
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    paddingVertical: 30,
    paddingHorizontal: 40,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#189DE4',
    width: '100%',
    paddingVertical: 20,
  },
  labelContainer: {
    backgroundColor: '#189DE4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  notificationContainer: {
    marginTop: 20,
  },
  notificationTextGreen: {
    color: 'green',
    fontSize: 16,
    marginBottom: 10,
  },
  notificationTextRed: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  sendContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  sendImage: {
    width: 50,
    height: 50,
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
  },
  menuBar: {
    padding: 10,
  },
  sidebarImage: {
    width: 30,
    height: 30,
  },
});

export default FileNotifRequest;

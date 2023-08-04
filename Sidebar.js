import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Sidebar = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleNavigation('Signup')}>
        <Text style={styles.text}>Dashboard</Text>
      </TouchableOpacity>
      {/*<TouchableOpacity onPress={() => handleNavigation('Notifications')}>
        <Text style={styles.text}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('View Schedule')}>
        <Text style={styles.text}>View Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('View Team')}>
        <Text style={styles.text}>View Team</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('Attendance History')}>
        <Text style={styles.text}>Attendance History</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('File Shift Change')}>
        <Text style={styles.text}>File Shift Change</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('Settings')}>
        <Text style={styles.text}>Settings</Text>
  </TouchableOpacity>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 40,
    paddingLeft: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Sidebar;

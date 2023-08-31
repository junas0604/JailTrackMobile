import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Sidebar = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleNavigation('Dashboard')}>
        <Text style={styles.text}><View style={styles.imageContainer}>
          <Image source={require('./Pictures/Dashboard.png')} style={styles.image} />
        </View>  Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation('Notification')}>
        <Text style={styles.text}><View style={styles.imageContainer}>
          <Image source={require('./Pictures/bell.png')} style={styles.image} />
        </View>  Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation('ViewSched')}>
        <Text style={styles.text}><View style={styles.imageContainer}>
          <Image source={require('./Pictures/calendar.png')} style={styles.image} />
        </View>  View Sched</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => handleNavigation('AttendanceHistory')}>
        <Text style={styles.text}><View style={styles.imageContainer}>
          <Image source={require('./Pictures/history.png')} style={styles.image} />
        </View>  Attendance History</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation('FileNotifRequest')}>
        <Text style={styles.text}><View style={styles.imageContainer}>
          <Image source={require('./Pictures/request.png')} style={styles.image} />
        </View>  File Shift Change</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation('JailTrack Login')}>
        <Text style={styles.text}><View style={styles.imageContainer}>
        </View>  Logout </Text>
      </TouchableOpacity>

      {/*<TouchableOpacity onPress={() => handleNavigation('Attendance History')}>
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
  imageContainer: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default Sidebar;

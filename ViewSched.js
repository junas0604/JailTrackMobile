import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';

const ViewSched = ({ navigation }) => {
  const handleSidebar = () => {
    navigation.navigate('Sidebar');
  };

  const handleStatusBarClick = () => {
    handleSidebar();
  };

  // Get the current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().slice(0, 10);

  // Get the next two days in YYYY-MM-DD format
  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);
  const nextTwoDays = new Date();
  nextTwoDays.setDate(nextTwoDays.getDate() + 2);

  const markedDates = {
    [currentDate]: { selected: false, backgroundColor: '#6E0C0B99' }, // Mark current date
    [nextDay.toISOString().slice(0, 10)]: { selected: false, backgroundColor: '#6E0C0B99' }, // Mark next day
    [nextTwoDays.toISOString().slice(0, 10)]: { selected: false, backgroundColor: '#6E0C0B99' }, // Mark other next day
  };

  return (
    <ImageBackground source={require('./Pictures/Background.png')} style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleStatusBarClick} style={styles.menuBar}>
          <Image source={require('./Pictures/Sidebar.png')} style={styles.sidebarImage} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>JailTrack</Text>
      </View>
      <View style={styles.calendarContainer}>
        <Calendar markedDates={markedDates} markingType={'period'} />
      </View>
      <View style={styles.scheduleContainer}>
        <TextInput
          value="JO1 Junas Gutib’s Schedule"
          style={styles.scheduleTitle}
          editable={false}
        />
        <Text style={styles.scheduleText}>22 23 24 Designation</Text>
        <Text style={styles.scheduleText}>Time in: 8:30 am - Time out: 4:30 pm</Text>
        <Text style={styles.scheduleText}>Assigned: Tower</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
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
    padding: 5,
  },
  sidebarImage: {
    width: 25,
    height: 25,
  },
  calendarContainer: {
    padding: 30,
    backgroundColor: 'transparent',
    width: 365,
    maxHeight: 350, // Set a maximum height for the calendar
  },
  scheduleContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 20,
    marginBottom: 20, // Add marginBottom to create space at the bottom
    borderRadius: 5,
    height: 200, // Set a fixed height for the schedule container
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scheduleText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
    marginBottom: 20, // Adjust marginBottom to create space between text blocks
  },
});

export default ViewSched;

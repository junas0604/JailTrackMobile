import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AttendanceHistory = ({ navigation }) => {
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

      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Date</Text>
          <Text style={styles.tableHeaderText}>Designation</Text>
          <Text style={styles.tableHeaderText}>Time In</Text>
          <Text style={styles.tableHeaderText}>Time Out</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>15 Feb 2019</Text>
          <Text style={styles.tableCell}>Office</Text>
          <Text style={styles.tableCell}>8:30 am</Text>
          <Text style={styles.tableCell}>6:30 pm</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>16 Feb 2019</Text>
          <Text style={styles.tableCell}>Office</Text>
          <Text style={styles.tableCell}>9:30 am</Text>
          <Text style={styles.tableCell}>4:30 pm</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>17 Feb 2019</Text>
          <Text style={styles.tableCell}>Office</Text>
          <Text style={styles.tableCell}>12:30 pm</Text>
          <Text style={styles.tableCell}>5:30 pm</Text>
        </View>
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
    padding: 10,
  },
  sidebarImage: {
    width: 30,
    height: 30,
  },
  tableContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 10,
    marginBottom: 10,
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginBottom: 10,
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default AttendanceHistory;

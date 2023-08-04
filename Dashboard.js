import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Dashboard = ({ navigation }) => {
  const handleSidebar = () => {
    navigation.navigate('Sidebar');
  };

  const handleStatusBarClick = () => {
    handleSidebar();
  };

  return (
    <ImageBackground source={require('./Pictures/Background.png')} style={styles.background}>
      <View style={[styles.pageContainer, { paddingTop: 50 }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleStatusBarClick} style={styles.menuBar}>
            <Image source={require('./Pictures/Sidebar.png')} style={styles.sidebarImage} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>JailTrack</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.inlineContainer}>
            <Image source={require('./Pictures/user.png')} style={styles.image} />
            <Text style={[styles.text, { marginLeft: 10 }]}>Hello, Officer Gutib</Text>
          </View>
          <Image source={require('./Pictures/wave.png')} style={styles.wave} />
        </View>
        <View style={styles.container}>
          <View style={[styles.additionalContainer, { marginBottom: 10 }]}>
            <Text style={styles.label}>No. of days duty 0</Text>
          </View>
          <View style={[styles.additionalContainer, { backgroundColor: '#146CA4', marginBottom: 10 }]}>
            <Text style={styles.label}>Off Duty</Text>
          </View>
          <View style={[styles.additionalContainer, { backgroundColor: '#6E0C0B99' }]}>
            <Text style={styles.label}>Officer Rank Jail Officer 1</Text>
          </View>
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
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  inlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  wave: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  additionalContainer: {
    marginTop: 20,
    paddingVertical: 30,
    paddingHorizontal: 40,
    backgroundColor: '#146CA4',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#292525',
    paddingVertical: 10,
    paddingHorizontal: 20,
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

export default Dashboard;

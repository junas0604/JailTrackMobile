import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Sidebar from './Sidebar';

// Import your screen components here
import DashboardScreen from './DashboardScreen';
import NotificationsScreen from './NotificationsScreen';
import ScheduleScreen from './ScheduleScreen';
import TeamScreen from './TeamScreen';
import AttendanceHistoryScreen from './AttendanceHistoryScreen';
import FileShiftChangeScreen from './FileShiftChangeScreen';
import Signup from './Signup';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
        <Drawer.Screen name="Signup" component={Signup} />
        {/*<Drawer.Screen name="Notifications" component={NotificationsScreen} />*/}
         {/*<Drawer.Screen name="Notifications" component={NotificationsScreen} />*/}
        {/*<Drawer.Screen name="Notifications" component={NotificationsScreen} />*/}
         {/*<Drawer.Screen name="Notifications" component={NotificationsScreen} />*/}
         {/*<Drawer.Screen name="Notifications" component={NotificationsScreen} />*/}
         {/*<Drawer.Screen name="Notifications" component={NotificationsScreen} />*/}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

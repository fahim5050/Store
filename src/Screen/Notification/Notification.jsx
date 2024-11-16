import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Icon from 'react-native-feather';

const notifications = [
  { id: '1', title: 'New Appointment', description: 'You have a new appointment at 10:00 AM.' },
  { id: '2', title: 'Update Available', description: 'A new version of the app is available. Update now!' },
  { id: '3', title: 'Reminder', description: 'Don’t forget your meeting tomorrow at 2:00 PM.' },
  { id: '4', title: 'Task Completed', description: 'Your recent task has been marked as complete.' },
];

const Notification = () => {
  const navigation = useNavigation();

  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with Back button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowContainer}>
          <Icon.ArrowLeft stroke="white" width={20} height={20} />
        </TouchableOpacity>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Notifications</Text>
        </View>
      </View>

      {/* Notifications list */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 10, // Adjust padding to give more space for the header
  },
  headerContainer: {
    flexDirection: 'row', // Align back button and header horizontally
    alignItems: 'center', // Vertically align the back button and header text
    justifyContent: 'flex-start', // Align items to the left
    marginBottom: 20,
  },
  headerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center the header text
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
  },
  
  // Style for back arrow container
  arrowContainer: {
    backgroundColor: '#1976d2', // Blue background for the arrow icon
    padding: 10,
    borderRadius: 25, // Circular border radius
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const notifications = [
  { id: '1', title: 'New Appointment', description: 'You have a new appointment at 10:00 AM.' },
  { id: '2', title: 'Update Available', description: 'A new version of the app is available. Update now!' },
  { id: '3', title: 'Reminder', description: 'Don’t forget your meeting tomorrow at 2:00 PM.' },
  { id: '4', title: 'Task Completed', description: 'Your recent task has been marked as complete.' },
];

const Notification = () => {
  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
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
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
});

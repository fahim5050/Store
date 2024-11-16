import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const ProfileScreen = () => {
  const userName = useSelector((state) => state.user.user.name);
  const userEmail = useSelector((state) => state.user.user.email);
  const userContact = useSelector((state) => state.user.user.phone);
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Handle logout logic (e.g., clearing local storage, redirecting)
    Alert.alert('Logout', 'You have been logged out!');
  
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={{
          uri: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp',
        }} // Replace with a valid image URL
        style={styles.profileImage}
      />
      
      {/* Name */}
      <Text style={styles.name}>{userName}</Text>

      {/* Contact Info */}
      <Text style={styles.email}>{userEmail}</Text>
      <Text style={styles.contact}>{userContact}</Text>

      {/* Bio or Description */}
      <Text style={styles.bio}>
        A software developer passionate about building mobile applications.
      </Text>

      {/* Buttons */}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Edit Profile Pressed!')}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  contact: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 30,
    color: '#777',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  button: {
    backgroundColor: '#2a67f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default ProfileScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // Predefined credentials for authentication
  const adminEmail = 'admin@gmail.com';
  const adminPassword = 'admin';

  const handleSignIn = () => {
    // Check if the entered email and password match the predefined ones
    if (email === adminEmail && password === adminPassword) {
      // Navigate to HomeScreen if credentials are correct
      navigation.navigate('HomeScreen');
    } else {
      // Show an alert if credentials are incorrect
      Alert.alert('Authentication Failed', 'Incorrect email or password.', [
        { text: 'OK' }
      ]);
    }
  };

  const handleRegister = () => {
    // navigation.navigate('UserRegistration');
  };

  return (
    <View style={styles.container}>
      {/* Optional Logo Image */}
      {/* <Image source={{ uri: 'your_logo_url_here' }} style={styles.logo} /> */}

      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerText}>Don't have an account? Register Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.1,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: width * 0.4,
    height: height * 0.2,
    marginBottom: height * 0.05,
    resizeMode: 'contain',
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: height * 0.03,
  },
  input: {
    width: '100%',
    padding: width * 0.04,
    marginVertical: height * 0.01,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    width: '100%',
    padding: width * 0.04,
    backgroundColor: '#3b5998', // Change color as needed
    borderRadius: 10,
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: '600',
  },
  forgotPassword: {
    color: '#3b5998',
    marginTop: height * 0.02,
    fontSize: width * 0.04,
  },
  registerText: {
    color: '#3b5998',
    marginTop: height * 0.02,
    fontSize: width * 0.04,
    textDecorationLine: 'underline',
  },
});

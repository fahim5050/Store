import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Slices/UserSlice'; // Import the action
import { useNavigation } from '@react-navigation/native';

const Registration = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // State to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  // Validation function
  const handleSubmit = () => {
    if (!name || !email || !password || !confirmPassword || !phone || !gender || !isChecked) {
      Alert.alert('Error', 'Please fill all the fields and agree to the terms');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // Dispatch registration data to Redux store
    dispatch(registerUser({ name, email, password, phone, gender }));

    Alert.alert('Success', 'You have registered successfully!');
    // Navigate to SignIn screen after successful registration
    navigation.navigate('SinginForm');

    // Clear the form after successful submission
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhone('');
    setGender('');
    setIsChecked(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>User Registration</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

      <View style={styles.radioContainer}>
        <TouchableOpacity style={[styles.radioOption, gender === 'Male' && styles.selectedRadio]} onPress={() => setGender('Male')}>
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.radioOption, gender === 'Female' && styles.selectedRadio]} onPress={() => setGender('Female')}>
          <Text style={styles.radioText}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.radioOption, gender === 'Other' && styles.selectedRadio]} onPress={() => setGender('Other')}>
          <Text style={styles.radioText}>Other</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => setIsChecked(!isChecked)}
          color="green" // Change selected checkbox color to green
        />
        <Text style={styles.checkboxText}>I agree to the terms and conditions</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'center',
  },
  radioOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  selectedRadio: {
    backgroundColor: '#d1d1d1',
  },
  radioText: {
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 3, // For Android shadow effect
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
});

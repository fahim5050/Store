import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import useNavigation for back button functionality
import * as Icon from 'react-native-feather';

const CheckoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation(); // Get the navigation prop for navigation functionality
  const { cartItems, totalPrice } = route.params || {}; // Retrieve cart data and total price passed from CartScreen
  const [customerName, setCustomerName] = useState(''); // State to store customer name

  // Render each cart item
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDetails}>
        Price: ${item.price} | Quantity: {item.quantity} | Total: ${(item.price * item.quantity).toFixed(2)}
      </Text>
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
          <Text style={styles.header}>Checkout</Text>
        </View>
      </View>

      {/* Cart Items */}
      <FlatList
        data={cartItems}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      {/* Total Price */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Price: ${totalPrice}</Text>
      </View>

      {/* Input for Customer Name */}
      <TextInput
        style={styles.input}
        placeholder="Enter your customer name"
        value={customerName}
        onChangeText={setCustomerName}
      />

      {/* Custom Checkout Button */}
      <View style={styles.checkoutContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Invoice', { customerName, cartItems, totalPrice })}
 style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Complete Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row', // Align back button and header horizontally
    alignItems: 'center', // Vertically align the back button and header text
    justifyContent: 'center', // Center the header text
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 15,
  },
  headerWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  itemContainer: {
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 14,
    color: 'gray',
  },
  totalContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginVertical: 16,
    borderRadius: 8,
  },
  checkoutContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  checkoutButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  arrowContainer: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 25,
  },
});

export default CheckoutScreen;

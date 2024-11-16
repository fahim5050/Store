import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';

const CartScreen = () => {
  // Access cart from Redux and ensure it's an empty array if undefined or null
  const cart = useSelector((state) => state.cart?.items || []);

  // Calculate the total price of all cart items
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

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
      <Text style={styles.header}>Cart Items</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty!</Text>
      ) : (
        <FlatList 
          data={cart} 
          keyExtractor={(item) => item.id.toString()} 
          renderItem={renderItem} 
        />
      )}
      
      {/* Total Price Display */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Price: ${calculateTotalPrice()}</Text>
      </View>

      {/* Checkout Button */}
      <View style={styles.checkoutContainer}>
        <Button title="Checkout" onPress={() => alert('Proceeding to Checkout')} color="#007BFF" />
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emptyCart: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
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
  checkoutContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
});

export default CartScreen;

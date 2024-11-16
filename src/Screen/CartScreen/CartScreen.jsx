import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { removeFromCart } from '../../../Slices/cartSlice';

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cartItems || []);
  console.log("Cart items in CartScreen:", cart);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <View style={styles.productDetailsContainer}>
        <View>
          <Text style={styles.notificationTitle}>{item.name}</Text>
          <Text style={styles.notificationDescription}>
            Price: ${item.price} | Quantity: {item.quantity} | Total: ${(item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
          <Icon.X stroke="red" width={25} height={25} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      Alert.alert('Your cart is empty!', 'Please add items to your cart before proceeding.');
    } else {
      navigation.navigate('Checkout', { cartItems: cart, totalPrice: calculateTotalPrice() });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowContainer}>
          <Icon.ArrowLeft stroke="white" width={20} height={20} />
        </TouchableOpacity>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Your Cart</Text>
        </View>
      </View>

      {cart.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty!</Text>
      ) : (
        <FlatList
          data={cart}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Price: ${calculateTotalPrice()}</Text>
      </View>

      <View style={styles.checkoutContainer}>
        <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  emptyCart: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
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
  productDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: '#1976d2',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartScreen;

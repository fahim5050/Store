import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Slices/cartSlice'; // Correct relative path
import { useNavigation } from '@react-navigation/native';
import * as Icon from 'react-native-feather';

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Increment the quantity
  const increment = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  // Decrement the quantity
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    navigation.navigate('HomeScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back arrow and Product Name container */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowContainer}>
          <Icon.ArrowLeft stroke="white" width={20} height={20} />
        </TouchableOpacity>
        <Text style={styles.header}>{product.name}</Text>
      </View>

      {/* Product Info */}
      <View style={styles.infoSection}>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.stock}><Text style={styles.text}>In Stock:</Text> {product.stockQuantity}</Text>
        <Text style={styles.category}><Text style={styles.text}>Category:</Text> {product.category}</Text>
        <Text style={styles.description}><Text style={styles.text}>Description:</Text>{product.description}</Text>
      </View>

      {/* Quantity Section */}
      <View style={styles.quantityContainer}>
        <Text style={styles.text}>Quantity:</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={[styles.button, quantity <= 1 && styles.buttonDisabled]}
            onPress={decrement}
            disabled={quantity <= 1}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={[styles.button, quantity >= product.stockQuantity && styles.buttonDisabled]}
            onPress={increment}
            disabled={quantity >= product.stockQuantity}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Buy Now Button */}
      <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align back button and product name vertically
    marginVertical: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10, // Add space between the arrow and product name
    color: '#333',
    marginLeft:25,
    flex: 1, // This makes the product name take up the remaining space
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  infoSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  stock: {
    fontSize: 18,
    color: '#616161',
  },
  category: {
    fontSize: 18,
    color: '#616161',
  },
  descriptionSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#616161',
    marginTop: 10,
  },
  quantityContainer: {
    marginVertical: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1976d2',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buyNowButton: {
    backgroundColor: '#d32f2f',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  buttonDisabled: {
    backgroundColor: '#bdbdbd',
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

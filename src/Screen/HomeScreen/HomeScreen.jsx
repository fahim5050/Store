import { StyleSheet,View } from 'react-native';
import React from 'react';
import Header from '../../../Components/Header/Header';
import products from '../../../constant/data';  // Assuming products are in the data.js file
import ProductTable from '../../../Components/ProductTable/ProductTable';
import Category from '../../../Components/Category/Category';

const HomeScreen = () => {
  const categories = [...new Set(products.map(product => product.category))];
  return (
    
    <View style={styles.container}>
      <Header />
      {/* Optionally, include Category component here if needed */}
      <Category categories={categories} />
      <View style={styles.contentContainer}>
        {/* Passing the products data to ProductTable */}
        <ProductTable products={products} />
       
      </View>
    </View>
   
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Light gray background
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
  },
 
});

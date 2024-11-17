import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const Category = ({ categories }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Categories</Text> */}
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        horizontal // Makes the list horizontal
        showsHorizontalScrollIndicator={false} // Hides the scroll bar
        contentContainerStyle={styles.categoryList} // Centers the items in the list
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background for the container
    borderRadius: 10, // Rounded corners
    marginVertical: 15, // Space between sections
  },

  categoryList: {
    // No need for flexDirection here as FlatList handles horizontal scrolling
    paddingHorizontal: 5, // Optional padding for better spacing
  },
  categoryItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 10, // Space between each item horizontally
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // Android shadow
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center', // Center the text within each item
  },
});

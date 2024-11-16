import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ProductTable = ({ products }) => {
  const navigation = useNavigation();

  // Method to get serial number for each item
  const getSerialNumber = (index) => {
    return index + 1; // Adds 1 to index to start from 1
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Products</Text>

      {/* Column Headers */}
      <View style={styles.row}>
        <Text style={[styles.text, styles.headerText]}>S.No</Text>
        <Text style={[styles.text, styles.headerText]}>Name</Text>
        <Text style={[styles.text, styles.headerText]}>Price</Text>
        <Text style={[styles.text, styles.headerText]}>Stock</Text>
      </View>

      <FlatList
        data={products} // Passing products data
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetail", { product: item })
            }
          >
            <View style={styles.row}>
              {/* Wrap serial number in <Text> */}
              <Text style={styles.serial}>{getSerialNumber(index)}</Text> 
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.text}>${item.price}</Text>
              <Text style={styles.text}>{item.stockQuantity}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductTable;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    marginTop: -30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  productName: {
    fontSize: 16,
    color: "#333",
    width: "30%", // Adjust width as needed
    textAlign: "left",
  },
  text: {
    fontSize: 16,
    color: "#333",
    width: "20%", // Adjust width as needed
    textAlign: "center",
  },
  serial:{
    fontSize: 16,
    color: "#333",
    width: "10%", // Adjust width as needed
    textAlign: "center",
  },
  headerText: {
    fontWeight: "bold",
    backgroundColor: "#f0f0f0", // Light background for header
  },
});

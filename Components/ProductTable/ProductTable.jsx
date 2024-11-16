import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ProductTable = ({ products }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Products</Text>

      {/* Column Headers */}
      <View style={styles.row}>
        <Text style={[styles.text, styles.headerText]}>Name</Text>
        <Text style={[styles.text, styles.headerText]}>Price</Text>
        <Text style={[styles.text, styles.headerText]}>Stock</Text>
      </View>

      <FlatList
        data={products} // Now passing products data
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetail", { product: item })
            }
          >
            <View style={styles.row}>
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
    // padding: 10,
    backgroundColor: "#fff",
    width:'100%',
    marginTop:-30
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
  productName:{
    fontSize: 16,
    color: "#333",
    width: "40%", // Adjust width as needed
    textAlign: "left"
  },
  text: {
    fontSize: 16,
    color: "#333",
    width: "30%", // Adjust width as needed
    textAlign: "center",
  },
  headerText: {
    fontWeight: "bold",
    backgroundColor: "#f0f0f0", // Light background for header
  },
});

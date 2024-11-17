import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import { useRoute, useNavigation } from '@react-navigation/native';

const InvoiceScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { customerName, cartItems, totalPrice } = route.params;

  // Ensure customerName is not null
  useEffect(() => {
    if (!customerName || customerName.trim() === '') {
      Alert.alert(
        'Invalid Customer Name',
        'Customer name cannot be empty. Please provide a valid name.',
        [
          {
            text: 'Go Back',
            onPress: () => navigation.goBack(),
          },
        ]
      );
    }
  }, [customerName]);

  // Generate PDF Function
  const generatePDF = async () => {
    const htmlContent = `
      <h1 style="text-align: center;">Invoice</h1>
      <p><strong>Customer Name:</strong> ${customerName}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
      <p><strong>Order ID:</strong> INV-${Math.floor(Math.random() * 100000)}</p>
      <table style="width: 100%; border-collapse: collapse;" border="1">
        <tr>
          <th style="padding: 8px;">Item</th>
          <th style="padding: 8px;">Price</th>
          <th style="padding: 8px;">Quantity</th>
          <th style="padding: 8px;">Total</th>
        </tr>
        ${cartItems
          .map(
            (item) => `
          <tr>
            <td style="padding: 8px;">${item.name}</td>
            <td style="padding: 8px;">$${item.price}</td>
            <td style="padding: 8px;">${item.quantity}</td>
            <td style="padding: 8px;">$${(item.price * item.quantity).toFixed(2)}</td>
          </tr>
        `
          )
          .join('')}
      </table>
      <h2 style="text-align: right;">Total: $${totalPrice}</h2>
    `;

    try {
      const { uri } = await Print.printToFileAsync({ html: htmlContent });
      const fileUri = `${FileSystem.documentDirectory}invoice.pdf`;

      await FileSystem.moveAsync({
        from: uri,
        to: fileUri,
      });

      Alert.alert(
        'PDF Generated',
        `Invoice has been saved successfully. File path: ${fileUri}`,
        [
          {
            text: 'Open',
            onPress: () => console.log(`File location: ${fileUri}`),
          },
          {
            text: 'OK',
            style: 'cancel',
          },
        ]
      );
    } catch (error) {
      console.error('Error generating PDF:', error);
      Alert.alert('Error', 'Failed to generate PDF. Please try again.');
    }iokjhghjnm
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>${item.price}</Text>
      <Text style={styles.itemText}>{item.quantity}</Text>
      <Text style={styles.itemText}>${(item.price * item.quantity).toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.customerInfo}>
        <Text style={styles.customerText}>Customer Name: {customerName}</Text>
        <Text style={styles.customerText}>Date: {new Date().toLocaleDateString()}</Text>
        <Text style={styles.customerText}>Order ID: INV-{Math.floor(Math.random() * 100000)}</Text>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Item</Text>
        <Text style={styles.tableHeaderText}>Price</Text>
        <Text style={styles.tableHeaderText}>Qty</Text>
        <Text style={styles.tableHeaderText}>Total</Text>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalPrice}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.pdfButton} onPress={generatePDF}>
          <Text style={styles.pdfButtonText}>Download Invoice</Text>
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
  customerInfo: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
  },
  customerText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1976d2',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  tableHeaderText: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 5,
    borderRadius: 8,
  },
  itemText: {
    flex: 1,
    textAlign: 'center',
    color: '#333',
  },
  totalContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'right',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  pdfButton: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  pdfButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default InvoiceScreen;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Invoice = ({ clientName, items, total, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invoice</Text>
      <Text style={styles.subtitle}>Date: {date}</Text>
      <Text style={styles.subtitle}>Client: {clientName}</Text>
      
      <View style={styles.itemList}>
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>{item.name} x {item.quantity}</Text>
            <Text>${item.price * item.quantity}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.total}>Total: ${total}</Text>
    </View>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  subtitle: { fontSize: 18, marginBottom: 10 },
  itemList: { marginVertical: 20 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  total: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20 },
});

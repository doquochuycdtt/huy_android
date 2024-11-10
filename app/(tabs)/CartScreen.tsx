import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useCart } from '../CartContext';

const CartScreen = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const renderCartItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price} x {item.quantity} = ${item.price * item.quantity}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={() => updateQuantity(item.id, -1)}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={() => updateQuantity(item.id, 1)}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleCheckout = () => {
    alert('Checkout functionality will be implemented here.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#777',
    marginVertical: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: '#3498db',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  removeButton: {
    marginTop: 10,
  },
  removeButtonText: {
    color: '#e74c3c',
    fontSize: 14,
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;

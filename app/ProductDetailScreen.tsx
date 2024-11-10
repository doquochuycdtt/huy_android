import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RootStackParamList } from './(tabs)/navigation/types';
import { RouteProp } from '@react-navigation/native';

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const { width: windowWidth } = Dimensions.get('window');

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailScreenRouteProp>();
  const { productId } = route.params;

  // Dữ liệu sản phẩm
  const products = [
    { id: '1', name: 'Iphone 16', image: require('../assets/images/pro/iphone-16-pro-max.webp'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 50 },
    { id: '2', name: 'Macbook', image: require('../assets/images/pro/macbook_4__7.webp'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 60 },
    { id: '3', name: 'Air Pod', image: require('../assets/images/pro/airpods-4-1.webp'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 70 },
    { id: '4', name: 'Philips S11', image: require('../assets/images/pro/may-cao-rau-philips-s1103-02.webp'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 80 },
  ];

  const productData = products.find(product => product.id === productId);

  if (!productData) {
    return (
      <View style={styles.container}>
        <Text>Sản phẩm không tồn tại.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={productData.image} style={styles.image} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{productData.name}</Text>
        <Text style={styles.price}>Giá: {productData.price} VND</Text>
        <Text style={styles.description}>{productData.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
  },
  image: {
    width: windowWidth * 0.9,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  productName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E91E63',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555555',
    textAlign: 'justify',
  },
});

export default ProductDetailScreen;

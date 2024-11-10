// HomeScreen.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './(tabs)/navigation/types';
import { useCart } from './CartContext'; // Import useCart 

const { width: windowWidth } = Dimensions.get('window');

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = {
  navigation: HomeScreenNavigationProp;
};

// Dữ liệu sản phẩm
const products = [
  { id: '1', name: 'Iphone 16', image: require('../assets/images/pro/iphone-16-pro-max.webp'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 50 },
  { id: '2', name: 'Macbook', image: require('../assets/images/pro/macbook_4__7.webp'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 60 },
  { id: '3', name: 'Air Pod', image: require('../assets/images/pro/airpods-4-1.webp'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 70 },
  { id: '4', name: 'Philips S11', image: require('../assets/images/pro/may-cao-rau-philips-s1103-02.webp'), description: 'Khung Titan & Mặt lưng kính cường lực, Dài 163 mm - Ngang 77.6 mm - Dày 8.25 mm - Nặng 227 g', price: 80 },
];

// Dữ liệu cho slider
const sliderImages = [
  { id: '1', uri: require('../assets/images/banners/slide1.jpg') },
  { id: '2', uri: require('../assets/images/banners/slide2.jpg') },
  { id: '3', uri: require('../assets/images/banners/slide3.jpg') },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { addToCart } = useCart(); // Lấy addToCart từ context

  return (
    <View style={styles.container}>
      {/* Header: Logo, Search Bar, and Cart */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/favicon.png')} // Lấy logo từ tệp
          style={styles.logo}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search products..."
        />
        <Icon 
          name="cart" 
          size={30} 
          onPress={() => navigation.navigate('Cart')} 
          style={styles.cartIcon}
        />
          <Icon 
          name="person" 
          size={30} 
          onPress={() => navigation.navigate('Login')} // Cập nhật điều hướng đến trang đăng nhập
          style={styles.userIcon}
        />
      </View>

      {/* Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => console.log('Điện thoại clicked')}>
          <Text>Iphone</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Laptop clicked')}>
          <Text>Macbook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('PC clicked')}>
          <Text>Item</Text>
        </TouchableOpacity>
      </View>

      {/* Slider (ScrollView) */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={[styles.scrollView, { width: windowWidth }]}
      >
        {sliderImages.map((item) => (
          <Image
            key={item.id}
            source={item.uri}
            style={styles.sliderImage}
            resizeMode="contain"
          />
        ))}
      </ScrollView>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image 
              source={item.image} 
              style={styles.productImage} 
              resizeMode="contain" 
            />
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
              >
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => addToCart(item)} // Thêm sản phẩm vào giỏ hàng
              >
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F5F5F5', // Màu nền nhẹ nhàng hơn
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginBottom: 15,
    backgroundColor: '#FFFFFF', // Nền màu trắng cho header
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 25,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    backgroundColor: '#FAFAFA',
  },
  cartIcon: {
    marginRight: 10,
  },
  userIcon: {
    marginRight: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  scrollView: {
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  sliderImage: {
    width: windowWidth - 30,
    height: '100%',
    borderRadius: 10,
  },
  productCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default HomeScreen;



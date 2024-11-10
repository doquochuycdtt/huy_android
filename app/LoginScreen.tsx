import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './(tabs)/navigation/types';
import { useUser } from './UserContext'; // Nhập UserContext
import backgroundImage from '../assets/images/797140.png'; // Đường dẫn đến file hình nền

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();
  const { login } = useUser(); // Lấy hàm login từ UserContext

  const handleLogin = () => {
    if (login(username, password)) {
      alert('Đăng nhập thành công!');
      navigation.navigate('Home'); // Chuyển đến màn hình chính
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
  };

  return (
    <ImageBackground 
      source={backgroundImage} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Đăng Nhập</Text>
          <TextInput
            style={styles.input}
            placeholder="Tên đăng nhập"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Đăng Nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>
              Chưa có tài khoản? Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Lớp phủ tối nhẹ để làm nổi bật nội dung
    justifyContent: 'center',
  },
  container: {
    padding: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#3498db',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 16,
  },
});

export default LoginScreen;

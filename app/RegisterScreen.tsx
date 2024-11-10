import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Nhập useNavigation
import { useUser } from './UserContext'; // Nhập UserContext
import backgroundImage from '../assets/images/797140.png'; // Đường dẫn đến file hình nền

const RegisterScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigation = useNavigation();
  const { register } = useUser(); // Lấy hàm register từ UserContext

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    
    register(username, password); // Đăng ký người dùng
    alert('Đăng ký thành công!');
    navigation.navigate('Login'); // Chuyển đến trang đăng nhập
  };

  return (
    <ImageBackground 
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Đăng Ký</Text>
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
          <TextInput
            style={styles.input}
            placeholder="Xác nhận mật khẩu"
            placeholderTextColor="#888"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Đăng Ký</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>
              Đã có tài khoản? Đăng nhập
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Lớp phủ tối giúp nội dung nổi bật hơn
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
  registerButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    color: '#3498db',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 16,
  },
});

export default RegisterScreen;

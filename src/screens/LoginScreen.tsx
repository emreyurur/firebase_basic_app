import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import CustomButton from '../components/CustomButton';
import authErrorMessage from '../utils/authErrorMessage';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [formValues, setFormValues] = useState<{ username: string; password: string }>({ username: '', password: '' });

  const handleFormSubmit = () => {
    auth()
      .signInWithEmailAndPassword(formValues.username, formValues.password)
      .then(() => {
        console.log('User signed in successfully!');
      })
      .catch(error => {
        Alert.alert('Error', authErrorMessage(error.code));
        console.error('Error signing in:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Giriş Yap</Text>
      <TextInput
        style={styles.input}
        value={formValues.username}
        onChangeText={(value) => setFormValues({ ...formValues, username: value })}
        placeholder="Kullanıcı adınızı giriniz..."
      />
      <TextInput
        style={styles.input}
        value={formValues.password}
        onChangeText={(value) => setFormValues({ ...formValues, password: value })}
        placeholder="Şifrenizi giriniz..."
        secureTextEntry
      />
      <CustomButton text="Giriş Yap" onPress={handleFormSubmit} loading={false} />
      <CustomButton text="Kayıt Ol" onPress={() => navigation.navigate('SignUpScreen')} loading={false} />
    </View>
  );
};

// LoginScreen için stil tanımlamalarınızı burada yapabilirsiniz
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
});

export default LoginScreen;

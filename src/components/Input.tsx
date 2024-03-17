import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean; // secureTextEntry özelliğini isteğe bağlı olarak belirtiyoruz
}

const Input: React.FC<InputProps> = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={placeholder.toLowerCase() === 'email' ? 'email-address' : 'default'}
      secureTextEntry={secureTextEntry} // secureTextEntry özelliğini burada kullanıyoruz
      placeholderTextColor="#999"
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default Input;

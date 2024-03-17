import React, { useState } from "react";
import { View, Alert } from "react-native";
import Input from "../components/Input";
import CustomButton from "../components/CustomButton";
import auth from '@react-native-firebase/auth';
import authErrorMessage from '../utils/authErrorMessage';

const SignUpScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSignUp = () => {
    if (!email || !password) {
      Alert.alert("E-posta ve şifre alanlarını doldurunuz.");
      return;
    }

    if (password !== repassword) {
      Alert.alert("Girilen şifreler aynı değil.");
      return;
    }

    auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("User created succesfully")
      })
      .catch(error => {
        const errorMessage = authErrorMessage(error.code);
        Alert.alert(errorMessage);
      });
  };

  return (
    <View>
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Input
        value={repassword}
        onChangeText={setRepassword}
        placeholder="Re-enter Password"
        secureTextEntry
      />
      <CustomButton
        text="Sign Up"
        onPress={handleSignUp}
        loading={false}
      />
    </View>
  );
};

export default SignUpScreen;

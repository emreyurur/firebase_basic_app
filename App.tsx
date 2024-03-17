import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MessageScreen from './src/screens/MessageScreen'

const Stack = createNativeStackNavigator();

import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

// const AuthStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="LoginScreen" component={LoginScreen} />
//       <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
//     </Stack.Navigator>
//   );
// }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
        <Stack.Screen name="MessageScreen" component={MessageScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

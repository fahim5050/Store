import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignInForm from "./Components/SignInForm.jsx";

import UserRegistration from "./Components/Registration.jsx";
import HomeScreen from "./src/Screen/HomeScreen/HomeScreen.jsx";
import ProductDetail from "./Components/ProductDetail/ProductDetail.jsx";
import Notification from "./src/Screen/Notification/Notification.jsx";
import CartScreen from "./src/Screen/CartScreen/CartScreen.jsx";
import ProfileScreen from "./src/Screen/ProfileScreen/ProfileScreen.jsx";
import EditProfileScreen from "./src/Screen/EditProfileScreen/EditProfileScreen.jsx";
import CheckoutScreen from "./src/Screen/CheckoutScreen/CheckoutScreen.jsx";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SinginForm"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SinginForm" component={SignInForm} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="UserRegistration" component={UserRegistration} />
        <Stack.Screen name="Notifications" component={Notification} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Editprofile" component={EditProfileScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import * as Icon from "react-native-feather";
import { useSelector } from "react-redux";

const Header = ({ notificationCount = 4, cartCount = 3 }) => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cartItems || []);
  const totalQuantity = cart.length;
  return (
    <View style={styles.headerContainer}>
      {/* Profile Section */}
      <TouchableOpacity
        style={styles.profileContainer}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Admin</Text>
      </TouchableOpacity>

      {/* Notification and Cart Section */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Icon.Bell
            stroke="black"
            width={24}
            height={24}
            onPress={() => navigation.navigate("Notifications")}
          />
          {notificationCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notificationCount}</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper}>
          <Icon.ShoppingCart
            stroke="black"
            width={24}
            height={24}
            onPress={() => navigation.navigate("Cart")}
          />
          {cartCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{totalQuantity}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    elevation: 5,
    // marginTop:15
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    position: "relative",
    marginLeft: 20,
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Header;

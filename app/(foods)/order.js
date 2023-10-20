import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/EvilIcons";
import MIcons from "react-native-vector-icons/MaterialIcons";
import IIcons from "react-native-vector-icons/Ionicons";
import { useCartStore, useMyOrdersStore } from "../../store";
import OrderCompleted from "../../components/OrderCompleted";

const order = () => {
  const [firstStep, setFirstStep] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    address: "",
    street: "",
    number: "",
  });

  const cartItems = useCartStore((state) => state.cartItems);
  const removeCartItems = useCartStore((state) => state.clearCartItems);
  const addToMyOrders = useMyOrdersStore((state) => state.addToMyOrders);

  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice = totalPrice + item?.price * item?.quantity;
  });

  const handleState = (value) => {
    setConfirmOrder(value);
  };

  return (
    <>
      {!confirmOrder ? (
        <View style={styles.container}>
          <View style={styles.title}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  ...styles.pointer,
                  backgroundColor: !firstStep ? "#4FAE5A" : "#ACB6BE",
                }}
              >
                <Text style={{ color: "white", fontFamily: "Neuton-Bold" }}>
                  1
                </Text>
              </View>
              <Text style={{ fontSize: 17, fontFamily: "Neuton-Bold" }}>
                Set Address
              </Text>
            </View>
            <Text
              style={{ fontSize: 19, fontWeight: "500", color: "#ACB6BE" }}
            >{`->`}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  ...styles.pointer,
                  backgroundColor: !firstStep ? "#ACB6BE" : "#4FAE5A",
                }}
              >
                <Text style={{ color: "white", fontFamily: "Neuton-Bold" }}>
                  2
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Neuton-Bold",
                  color: !firstStep ? "#ACB6BE" : "black",
                }}
              >
                Confirm Order
              </Text>
            </View>
          </View>
          {!firstStep ? (
            <View style={{ width: "100%", alignItems: "center" }}>
              <TextInput
                label="Full Name"
                activeUnderlineColor="black"
                style={styles.input}
                value={values.name}
                onChangeText={(text) => handleChange("name", text)}
              />
              <TextInput
                label="Address"
                activeUnderlineColor="black"
                style={styles.input}
                value={values.address}
                onChangeText={(text) => handleChange("address", text)}
              />
              <TextInput
                label="Street Name"
                activeUnderlineColor="black"
                style={styles.input}
                value={values.street}
                onChangeText={(text) => handleChange("street", text)}
              />
              <TextInput
                label="Mobile Number"
                activeUnderlineColor="black"
                style={styles.input}
                value={values.number}
                keyboardType="number-pad"
                onChangeText={(text) => handleChange("number", text)}
              />
              <TouchableOpacity
                style={{
                  ...styles.button,
                  position: "relative",
                  marginTop: 170,
                }}
                activeOpacity={0.6}
                disabled={
                  !values.name ||
                  !values.address ||
                  !values.street ||
                  !values.number
                }
                onPress={() => setFirstStep(true)}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontFamily: "Neuton-Bold",
                  }}
                >
                  Save and Continue
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <TouchableOpacity
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 35,
                  marginTop: 30,
                }}
                activeOpacity={0.5}
                onPress={() => setFirstStep(false)}
              >
                <View>
                  <View style={{ flexDirection: "row", position: "relative" }}>
                    <Icon
                      name="location"
                      size={30}
                      color="green"
                      style={{ position: "absolute", left: -30 }}
                    />
                    <Text
                      style={{
                        marginEnd: 3,
                        fontFamily: "Neuton-Bold",
                        fontSize: 16,
                        textTransform: "capitalize",
                      }}
                    >
                      {values.name}
                    </Text>
                    <Text style={styles.textColor}>(+91) {values.number}</Text>
                  </View>
                  <View style={{ flexDirection: "row", width: 150 }}>
                    <Text style={styles.textColor}>
                      {values.address}, {values.street}
                    </Text>
                  </View>
                </View>
                <View>
                  <MIcons name="arrow-forward-ios" size={20} />
                </View>
              </TouchableOpacity>
              <View style={{ marginTop: 45, width: "100%" }}>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18, fontFamily: "Neuton-Bold" }}>
                    Payment Method
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                    marginTop: 20,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <IIcons name="cash-outline" color="green" size={25} />
                    <Text
                      style={{
                        marginLeft: 7,
                        fontFamily: "Neuton-Bold",
                        fontSize: 16,
                      }}
                    >
                      Cash on delivery
                    </Text>
                  </View>
                  <View>
                    <IIcons name="checkmark-circle" color="green" size={25} />
                  </View>
                </View>
                <View style={styles.total}>
                  {cartItems?.map((item) => (
                    <View
                      key={item.id}
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        marginTop: 5,
                      }}
                    >
                      <Text
                        style={{ fontSize: 16, fontFamily: "Neuton-Regular" }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{ fontSize: 15, fontFamily: "Neuton-Regular" }}
                      >
                        ₹{item.price}.00
                      </Text>
                    </View>
                  ))}
                  <View
                    style={{
                      borderTopWidth: 1,
                      borderColor: "grey",
                      marginTop: 15,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 10,
                        marginTop: 10,
                      }}
                    >
                      <Text style={{ fontSize: 15, fontFamily: "Neuton-Bold" }}>
                        Total Price
                      </Text>
                      <Text style={{ fontSize: 15, fontFamily: "Neuton-Bold" }}>
                        ₹{totalPrice}.00
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </>
          )}
          {firstStep && (
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.6}
              onPress={() => {
                setLoading(true);
                addToMyOrders(cartItems);
                setTimeout(() => {
                  setLoading(false);
                  setConfirmOrder(true);
                  removeCartItems();
                }, 3000);
              }}
            >
              {!loading ? (
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontFamily: "Neuton-Bold",
                  }}
                >
                  Submit Order (₹{totalPrice})
                </Text>
              ) : (
                <ActivityIndicator size="small" color="white" />
              )}
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <OrderCompleted handleState={handleState} />
      )}
    </>
  );
};

export default order;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingTop: 60,
    position: "relative",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 7,
    borderColor: "#F6F6F6F6",
    width: "100%",
  },
  input: {
    marginTop: 30,
    width: "90%",
    backgroundColor: "white",
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: "#A8B1B6",
    borderRadius: 7,
  },
  pointer: {
    alignItems: "center",
    marginRight: 5,
    justifyContent: "center",
    width: 20,
    height: 20,
    borderRadius: 25,
  },
  button: {
    backgroundColor: "#036F48",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    padding: 13,
    width: "90%",
    borderRadius: 7,
  },
  textColor: {
    color: "gray",
    fontFamily: "Neuton-Regular",
  },
  total: {
    backgroundColor: "#FEF5EE",
    marginTop: 30,
    padding: 10,
    height: "100%",
    borderRadius: 20,
  },
});

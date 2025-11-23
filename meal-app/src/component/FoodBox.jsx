import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FoodBoxStyles as styles } from "../style/FoodBox.js";
import foodImage from "../content/FoodBoxImageChanger.js";
const FoodBox = ({ type, description }) => {
  return (
    <View style={styles.boxContainer}>
      <View>
        <Image source={foodImage[type]} style={styles.image} />
      </View>
      <View style={styles.detail}>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default FoodBox;

import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Filter extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 25,
            color: "red",
            fontWeight: "bold",
            marginTop: 25
          }}
        >
          0
        </Text>
      </View>
    );
  }
}

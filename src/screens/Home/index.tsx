import React from "react";
import { View, Text } from "react-native";

const Home: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#010101",
      }}
    >
      <Text style={{ fontSize: 25, lineHeight: 40, color: "#FFF" }}>Home</Text>
    </View>
  );
};

export default Home;
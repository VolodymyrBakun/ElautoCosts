import { Button, StyleSheet, Text, View } from "react-native"
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Registration = () => {
    const navigation = useNavigation();

    return (
      <View>
        <Text>Registration Screen</Text>
        <Button
          title="Go to Login"
          onPress={() =>
            navigation.navigate("Login", { sessionId: 7, userId: "12345" })
          }
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    }
});

export default Registration
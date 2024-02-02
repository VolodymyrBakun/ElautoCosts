import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function Login() {
    const navigation = useNavigation();
    const { params: { userId } } = useRoute();

  return (
    <View>
          <Text>Login Screen</Text>
          <Text>User Id {userId}</Text>
          <Button title='Go to Home' onPress={()=> navigation.navigate("Home")} />
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})
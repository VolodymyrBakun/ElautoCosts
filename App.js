import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home/Home";
import Registration from "./src/screens/Registration/Registration";
import Login from "./src/screens/Login/Login";

const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "HTML",
  },
  {
    id: "4116-jfk5-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4j55",
    title: "React",
  },
  {
    id: "LG16-ant5-0J25",
    title: "React Native",
  },
];

const MainStack = createStackNavigator();

export default function App() {
  const [courses, setCourses] = useState(COURSES);
  const [text, setText] = useState("");

  const [fontsLoaded] = useFonts({
    Lobster: require("./src/assets/fonts/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const sayHello = () => {
    console.log("Hello!!!");
  };

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ title: "ElcarCosts" }}
        />
        <MainStack.Screen
          name="Registration"
          component={Registration}
          options={{ title: "ElcarCosts" }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{ title: "ElcarCosts" }}
        />
      </MainStack.Navigator>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>ElcarCosts</Text>
            <Image
              source={require("./Img/Logo.webp")}
              style={{ width: 40, height: 40 }}
            />
          </View>

          {/* <ScrollView>
            {courses.map((course) => (
              <Text key={course.id}>{course.title}</Text>
            ))}
          </ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder="How much kWt you heve used his month"
              style={styles.textInput}
              keyboardType="numeric"
            />
          </KeyboardAvoidingView>
          <Button title="Save" color="green" />

          <FlatList
            data={courses}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={(item) => item.id}
          />

          <TouchableOpacity onPress={sayHello}>
            <Text>Say!</Text>
          </TouchableOpacity>

          <Text>Hello!!!</Text>
          <StatusBar style="auto" /> */}
        </View>
      </TouchableWithoutFeedback>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 60,
  },
  titleWrap: {
    backgroundColor: "#CCFFFF",
    // width: 1000,
    paddingLeft: 50,
    paddingRight: 50,
    height: 60,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#33FFFF",
    borderRadius: 6,
  },
  title: {
    fontFamily: "Lobster",
    color: "#66CC00",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "green",
    padding: 5,
  },
});

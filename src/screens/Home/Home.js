import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Button,
} from "react-native";

const STATS = [
  {
    id: "45k6-j54k-4jth",
    odometer: 10000,
    counterReadingKW: 150,
  },
  {
    id: "4116-jfk5-43rh",
    odometer: 10500,
    counterReadingKW: 250,
  },
  {
    id: "4d16-5tt5-4j55",
    odometer: 11000,
    counterReadingKW: 350,
  },
  {
    id: "LG16-ant5-0J25",
    odometer: 11500,
    counterReadingKW: 450,
  },
];

const Home = () => {
  const [stat, setStat] = useState(STATS);
  const [mileage, setMileage] = useState();
  const [usedKW, setUsedKW] = useState();
  const [kWPrice, setkWPrice] = useState(3);

  const distance = stat[stat.length - 1].odometer - stat[0].odometer;
  const spendKW =
    stat[stat.length - 1].counterReadingKW - stat[0].counterReadingKW;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text> {((usedKW / mileage) * 1000).toFixed(2)} W/km </Text>
        <Text>You have driven {distance} km</Text>
        <Text>You have spend {spendKW} kW</Text>
        <Text>
          Average cost per km {((spendKW / distance) * kWPrice).toFixed(2)}{" "}
          hryvnias
        </Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Your km on the odometer"
            onChangeText={setMileage}
            value={mileage}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Your kW counter reading"
            onChangeText={setUsedKW}
            value={usedKW}
            keyboardType="numeric"
          />
          <Button title="Save"/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aligneItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "green",
    padding: 5,
    margin: 5,
  },
});

export default Home;

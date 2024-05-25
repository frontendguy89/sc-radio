import { Pressable, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TimerButton() {
  return (
    <View>
      <Pressable>
        <MaterialIcons name="timer" size={32} color="lightblue" />
      </Pressable>
    </View>
  );
}

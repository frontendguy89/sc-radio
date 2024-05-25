import { Pressable, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function VolumeButton() {
  return (
    <View>
      <Pressable>
        <MaterialIcons name="volume-up" size={32} color="lightblue" />
      </Pressable>
    </View>
  );
}

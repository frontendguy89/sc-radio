import { Pressable, View } from "react-native";
import TimerButton from "./TimerButton";
import PlayPauseButton from "./PlayPauseButton";
import VolumeButton from "./VolumeButton";
import Progress from "./Progress";
import { TrackInfo } from "./TrackInfo";

export default function PlayerControls() {
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        <TimerButton />
        <PlayPauseButton />
        <VolumeButton />
      </View>
    </View>
  );
}

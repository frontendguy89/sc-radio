import { Image, StyleSheet, Text, View } from "react-native";
import type { Track } from "react-native-track-player";
import { ThemedText } from "@/components/ThemedText";

export const TrackInfo: React.FC<{
  track?: Track;
}> = ({ track }) => {
  // TODO: properly fix type
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const imageUri = track?.artwork?.uri || track?.artwork;

  return (
    <View>
      <View style={{flex:1, flexDirection: "row", gap:8, alignItems:"center", justifyContent:"center"}}>
        <ThemedText>{track?.title}</ThemedText>
        <ThemedText> - </ThemedText>
        <ThemedText>{track?.artist}</ThemedText>
      </View>
    </View>
  );
};

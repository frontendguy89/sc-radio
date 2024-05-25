import { Image, StyleSheet, Text, View } from "react-native";
import type { Track } from "react-native-track-player";

export const TrackInfo: React.FC<{
  track?: Track;
}> = ({ track }) => {
  // TODO: properly fix type
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const imageUri = track?.artwork?.uri || track?.artwork;

  return (
    <View>
      <Image source={{ uri: imageUri }} />
      <View style={{flex:1, flexDirection: "row", gap:8, alignItems:"center", justifyContent:"center"}}>
        <Text>{track?.title}</Text>
        <Text> - </Text>
        <Text>{track?.artist}</Text>
      </View>
    </View>
  );
};

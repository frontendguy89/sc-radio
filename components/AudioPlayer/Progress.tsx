import Slider from "@react-native-community/slider";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import TrackPlayer, { useProgress } from "react-native-track-player";
import { ThemedText } from "@/components/ThemedText";

export default function Progress() {
  const { position, duration } = useProgress();

  const progressBarWidth = Dimensions.get("window").width * 0.92;

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
      <Slider
        style={{width: progressBarWidth}}
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor="white"
        minimumTrackTintColor="lightblue"
        maximumTrackTintColor="orange"
        onSlidingComplete={TrackPlayer.seekTo}
      />
      <View style={{flex:1, flexDirection: "row", gap:606, justifyContent:"space-between"}}>
      <ThemedText>00:00</ThemedText>
        <ThemedText>{formatSeconds(position)}</ThemedText>
 
        <ThemedText>
          {formatSeconds(Math.max(0, duration - position))}
        </ThemedText>
      </View>
    </View>
  );
}

const formatSeconds = (time: number) =>
    new Date(time * 1000).toISOString().slice(14, 19);
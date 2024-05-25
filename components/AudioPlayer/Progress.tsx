import Slider from "@react-native-community/slider";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import TrackPlayer, { useProgress } from "react-native-track-player";

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
        thumbTintColor="#FFD479"
        minimumTrackTintColor="#FFD479"
        maximumTrackTintColor="#FFFFFF"
        onSlidingComplete={TrackPlayer.seekTo}
      />
      <View style={{flex:1, flexDirection: "row", gap:8}}>
        <Text>{formatSeconds(position)}</Text>
        <Text> - </Text>
        <Text>
          {formatSeconds(Math.max(0, duration - position))}
        </Text>
      </View>
    </View>
  );
}

const formatSeconds = (time: number) =>
    new Date(time * 1000).toISOString().slice(14, 19);
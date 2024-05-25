import TrackPlayer, { useIsPlaying } from 'react-native-track-player';
import { MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator, Text, View, type TextProps } from "react-native";
import { Pressable } from "react-native";

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export default function PlayPauseButton({
  style, lightColor, darkColor, type = 'default', ...rest
}: ThemedTextProps) {

  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const { playing, bufferingDuringPlay } = useIsPlaying();
  
  return (
    <View>
      {bufferingDuringPlay ? (
        <ActivityIndicator />
      ) : (
      <Pressable onPress={playing ? TrackPlayer.pause : TrackPlayer.play}>
        <MaterialIcons
          name={playing ? "pause-circle" : "play-circle"}
          size={64}
          color="orange"
          raised
        />
      </Pressable>
      )}
    </View>
  );
}

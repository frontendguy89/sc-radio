import PlayerControls from "@/components/AudioPlayer/PlayerControls";
import Login from "@/components/Login/LoginForm";
import Logo from "@/components/Logo/Logo";
import { QueueInitialTracksService } from "@/services/QueueInitialTracksService";
import { SetupService } from "@/services/SetupService";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import TrackPlayer, { useActiveTrack } from "react-native-track-player";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { TrackInfo } from "@/components/AudioPlayer/TrackInfo";
import Progress from "@/components/AudioPlayer/Progress";

export default function Index() {
  const track = useActiveTrack();
  const isPlayerReady = useSetupPlayer();

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
      }}
    >
      <Logo />
      <ThemedText type="title">Welcome to South Coast Radio</ThemedText>
      <View>
        <TrackInfo track={track} />
        <Progress />
        <PlayerControls />
      </View>
    </ThemedView>
  );
}
function useSetupPlayer() {
  const [playerReady, setPlayerReady] = useState<boolean>(false);

  useEffect(() => {
    let unmounted = false;
    (async () => {
      await SetupService();
      if (unmounted) return;
      setPlayerReady(true);
      const queue = await TrackPlayer.getQueue();
      if (unmounted) return;
      if (queue.length <= 0) {
        await QueueInitialTracksService();
      }
    })();
    return () => {
      unmounted = true;
    };
  }, []);
  return playerReady;
}

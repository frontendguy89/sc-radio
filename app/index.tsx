import PlayerControls from "@/components/AudioPlayer/PlayerControls";
import Logo from "@/components/Logo/Logo";
import { QueueInitialTracksService } from "@/services/QueueInitialTracksService";
import { SetupService } from "@/services/SetupService";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import TrackPlayer, { useActiveTrack } from "react-native-track-player";

export default function Index() {

  const track = useActiveTrack();
  const isPlayerReady = useSetupPlayer();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Logo />
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <PlayerControls />
    </View>
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


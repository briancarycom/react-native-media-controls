import React from "react";
import { TouchableOpacity, View, ActivityIndicator, Image } from "react-native";
import styles from "./MediaControls.style";
import { Props } from "./MediaControls";
import { PLAYER_STATES } from "./constants/playerStates";

import images from "./Images";

type ControlsProps = Pick<
  Props,
  "isLoading" | "mainColor" | "playerState" | "onReplay"
> & {
  onPause: () => void;
};

const Controls = (props: ControlsProps) => {
  const { isLoading, mainColor, playerState, onReplay, onPause } = props;
  const pressAction = playerState === PLAYER_STATES.ENDED ? onReplay : onPause;

  const replayIcon = images.replayIcon;
  const icon =
    playerState === PLAYER_STATES.ENDED
      ? replayIcon
      : PLAYER_STATES.PLAYING
      ? images.pauseIcon
      : images.playIcon;

  const content = isLoading ? (
    <ActivityIndicator size="large" color="#FFF" />
  ) : (
    <TouchableOpacity
      style={[styles.playButton, { backgroundColor: mainColor }]}
      onPress={pressAction}
      activeOpacity={0}
    >
      <Image source={icon} style={styles.playIcon} />
    </TouchableOpacity>
  );

  return <View style={[styles.controlsRow]}>{content}</View>;
};

export { Controls };

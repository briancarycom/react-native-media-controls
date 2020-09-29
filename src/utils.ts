import { PLAYER_STATES } from "./constants/playerStates";
import images from './Images'

export const humanizeVideoDuration = (seconds: number) => {
  const [begin, end] = seconds >= 3600 ? [11, 8] : [14, 5];
  const date = new Date(0);

  date.setSeconds(seconds);
  return date.toISOString().substr(begin, end);
};

export const noop = () => {};

export const getPlayerStateIcon = (playerState: PLAYER_STATES) => {
  switch (playerState) {
    case PLAYER_STATES.PAUSED:
      return images.playIcon;
    case PLAYER_STATES.PLAYING:
      return images.pauseIcon;
    case PLAYER_STATES.ENDED:
      return images.replayIcon;
    default:
      return null;
  }
};

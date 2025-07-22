import Types from "./types";
import { channels as UltimateChannelStore } from "replugged/common";

export const _handleClick = ({
  channel,
  onClick,
}: {
  channel: Types.Channel;
  onClick: Types.DefaultTypes.UnknownFunction;
}): void => {
  if (UltimateChannelStore.getVoiceChannelId() !== channel.id) return;
  onClick();
};

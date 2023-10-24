import patchChannelItem from "./ChannelItem";
import patchChannelMentions from "./ChannelMentions";
import patchIconMod from "./IconMod";

export const applyInjections = (): void => {
  patchChannelItem();
  patchChannelMentions();
  patchIconMod();
};

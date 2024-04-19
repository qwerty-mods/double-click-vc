import Modules from "../lib/requiredModules";
import injectChannelItem from "./ChannelItem";
import injectChannelMentions from "./ChannelMentions";
import injectIconMod from "./IconMod";

export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectChannelItem();
  injectChannelMentions();
  injectIconMod();
};

export default { applyInjections };

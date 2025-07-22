import injectChannelMentions from "./ChannelMentions";

export const applyInjections = async (): Promise<void> => {
  injectChannelMentions();
};

export default { applyInjections };

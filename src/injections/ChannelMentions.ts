import { parser as Parser, channels as UltimateChannelStore } from "replugged/common";
import { PluginInjector } from "../index";
import Types from "../types";
export default (): void => {
  PluginInjector.after(
    Parser.defaultRules.channelMention,
    "react",
    ([{ channelId }]: [{ channelId?: string }], res: React.ReactElement & Types.Tree) => {
      const channel = UltimateChannelStore.getChannel(channelId);
      if (channel?.isGuildStageVoice() || channel?.isGuildVoice()) {
        res.props.onDoubleClick = res.props.onClick;
        res.props.onClick = () => {
          if (UltimateChannelStore.getVoiceChannelId() !== channelId) return;
          res.props.onDoubleClick();
        };
      }
      return res;
    },
  );
};

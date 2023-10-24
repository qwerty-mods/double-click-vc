import { channels, parser } from "replugged/common";
import { PluginInjector } from "../index";
import Types from "../types";
export default (): void => {
  PluginInjector.after(
    parser.defaultRules.channelMention,
    "react",
    ([{ channelId }]: [{ channelId?: string }], res: React.ReactElement & Types.Tree) => {
      const channel = channels.getChannel(channelId);
      if (channel?.isGuildStageVoice() || channel?.isGuildVoice()) {
        res.props.onDoubleClick = res.props.onClick;
        res.props.onClick = () => null;
      }
      return res;
    },
  );
};

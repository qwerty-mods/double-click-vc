import { util, webpack } from "replugged";
import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Types from "../types";
export default (): void => {
  const { ChannelButtonClasses, ChannelItem } = Modules;
  const loader = webpack.getFunctionKeyBySource(ChannelItem, ".ALL_MESSAGES");
  PluginInjector.after(ChannelItem, loader, (_args, res: React.ReactElement & Types.Tree) => {
    const button = util.findInReactTree(res, (n: React.ReactElement & Types.Tree) =>
      n?.props?.className?.includes(ChannelButtonClasses?.link),
    ) as (React.ReactElement & Types.Tree) | undefined;

    if (button?.props) {
      button.props.onDoubleClick = button.props.onClick;
      delete button.props.onClick;
    }
    return res;
  });
};

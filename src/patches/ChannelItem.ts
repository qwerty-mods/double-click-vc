import { util, webpack } from "replugged";
import { PluginInjector } from "../index";
import { ChannelButtonClasses, ChannelItem } from "../lib/requiredModules";
import Types from "../types";
export default (): void => {
  const FunctionKey = webpack.getFunctionKeyBySource(ChannelItem, ".subtitleColor")!;
  PluginInjector.after(ChannelItem, FunctionKey, (_args, res: React.ReactElement & Types.Tree) => {
    const button = util.findInReactTree(res, (n: React.ReactElement & Types.Tree) =>
      n?.props?.className?.includes(ChannelButtonClasses.link),
    ) as (React.ReactElement & Types.Tree) | undefined;

    if (button?.props) {
      button.props.onDoubleClick = button.props.onClick;
      delete button.props.onClick;
    }
    return res;
  });
};

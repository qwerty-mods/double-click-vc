import { webpack } from "replugged";
import { PluginInjector } from "../index";
import { IconMod } from "../lib/requiredModules";
import Types from "../types";
export default (): void => {
  const IconModFunction = webpack.getFunctionBySource<{ Icon: Types.DefaultTypes.AnyFunction }>(
    IconMod,
    ".childrenBottom",
  )!;
  PluginInjector.after(
    IconModFunction,
    "Icon",
    (
      [{ onDoubleClick }]: [{ onDoubleClick: Types.DefaultTypes.AnyFunction }],
      res: React.ReactElement,
    ) => {
      PluginInjector.after(res.props, "children", (_args, res: React.ReactElement) => {
        res.props.onDoubleClick = onDoubleClick;
        res.props.onClick ??= () => null;
        return res;
      });
      return res;
    },
  );
};

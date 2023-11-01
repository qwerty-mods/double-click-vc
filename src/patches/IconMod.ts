import { PluginInjector } from "../index";
import { Interactive } from "../lib/requiredModules";
import Types from "../types";
export default (): void => {
  PluginInjector.after(
    Interactive.default,
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

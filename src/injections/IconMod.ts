import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Types from "../types";
export default (): void => {
  const { Interactive } = Modules;
  PluginInjector.after(
    Interactive.default,
    "Icon",
    (
      [{ onDoubleClick }]: [{ onDoubleClick: Types.DefaultTypes.AnyFunction }],
      res: React.ReactElement,
    ) => {
      if (!onDoubleClick) return res;
      const originalChildren = res.props.children;
      res.props.children = (...args) => {
        const res = originalChildren.apply(null, ...args);
        res.props.onDoubleClick = onDoubleClick;
        res.props.onClick ??= () => null;
        return res;
      };
      return res;
    },
  );
};

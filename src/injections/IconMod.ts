import { webpack } from "replugged";
import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Types from "../types";
export default (): void => {
  const { Interactive } = Modules;
  console.log(Interactive);
  const InteractiveDefault = webpack.getExportsForProps<{
    Icon: { render: Types.DefaultTypes.AnyFunction };
  }>(Interactive, ["Icon"]);

  PluginInjector.after(
    InteractiveDefault.Icon,
    "render",
    (
      [{ onDoubleClick }]: [{ onDoubleClick: Types.DefaultTypes.AnyFunction }],
      res: React.ReactElement,
    ) => {
      if (!onDoubleClick) return res;
      const originalChildren = res.props.children;
      res.props.children = (...args) => {
        const res = originalChildren(...args);
        res.props.onDoubleClick = onDoubleClick;
        res.props.onClick ??= () => null;
        return res;
      };
      return res;
    },
  );
};

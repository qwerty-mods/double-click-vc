import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.ChannelItem = await webpack.waitForProps<Types.ChannelItem>("ChannelItemIcon");
  Modules.ChannelButtonClasses = await webpack.waitForProps<Types.ChannelButtonClasses>(
    "modeMuted",
    "linkBottom",
  );
  Modules.Interactive = await webpack.waitForProps<Types.Interactive>("Icon", "default");
};

export default Modules;

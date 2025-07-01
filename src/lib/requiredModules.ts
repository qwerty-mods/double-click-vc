import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.ChannelButtonClasses = await webpack
    .waitForProps<Types.ChannelButtonClasses>(["modeMuted", "linkBottom"], {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find ChannelButtonClasses Module");
    });

  Modules.ChannelItem ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource(".iconContainerWithGuildIcon,"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find ChannelItem Module");
    });

  Modules.Interactive = await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource(".Masks.HEADER_BAR_BADGE_TOP"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find Interactive Module");
    });
};

export default Modules;

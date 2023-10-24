import { webpack } from "replugged";
import * as Types from "../types";

export const ChannelItem = webpack.getBySource<Types.genericObjectExport>(".subtitleColor");
export const ChannelButtonClasses = webpack.getByProps<Types.ChannelButtonClasses>(
  "channelEmoji",
  "linkBottom",
);
export const IconMod = webpack.getBySource(".childrenBottom");

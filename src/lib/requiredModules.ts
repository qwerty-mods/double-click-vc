import { webpack } from "replugged";
import Types from "../types";

export const ChannelItem = webpack.getByProps<Types.ChannelItem>("ChannelItemIcon");
export const ChannelButtonClasses = webpack.getByProps<Types.ChannelButtonClasses>(
  "channelEmoji",
  "linkBottom",
);
export const Interactive = webpack.getByProps<Types.Interactive>("Icon", "default");

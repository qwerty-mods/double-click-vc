export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";
export { Channel } from "discord-types/general";
export { Tree } from "replugged/dist/renderer/util";
export interface ChannelButtonClasses {
  channelEmoji: string;
  channelEmojiLeftOfIcon: string;
  channelEmojiRightOfIcon: string;
  children: string;
  emojiColorFill: string;
  favoritesSuggestion: string;
  icon: string;
  iconContainer: string;
  link: string;
  linkBottom: string;
  linkTop: string;
  linkWithChannelEmoji: string;
  modeConnected: string;
  modeLocked: string;
  modeMuted: string;
  modeSelected: string;
  modeUnread: string;
  name: string;
  newBadge: string;
  notInteractive: string;
  numberBadge: string;
  responsiveWidthMobile: string;
  ripple: string;
  subtitle: string;
  topContent: string;
  twemoji: string;
  typeThread: string;
  unread: string;
  unreadRelevant: string;
  wrapper: string;
}
export interface ChannelItem {
  default: DefaultTypes.AnyFunction;
  ChannelItemIcon: DefaultTypes.AnyFunction;
}
export interface Interactive {
  Icon: DefaultTypes.AnyFunction;
  default: { Icon: DefaultTypes.AnyFunction } & DefaultTypes.AnyFunction;
}
export interface Modules {
  loadModules?: () => Promise<void>;
  ChannelItem?: ChannelItem;
  ChannelButtonClasses?: ChannelButtonClasses;
  Interactive?: Interactive;
}
export * as default from "./types";

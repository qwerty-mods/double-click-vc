export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";
export { Channel } from "discord-types/general";
export { Tree } from "replugged/util";
export interface GenericModule extends Record<string, DefaultTypes.AnyFunction> {}
export interface GenericExport {
  exports: GenericModule;
  id: number;
  loaded: boolean;
}
export interface genericObjectExport extends Record<string | number, DefaultTypes.AnyFunction> {}
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
export * as default from "./types";

import { types } from "replugged";
import type util from "replugged/util";

export namespace Types {
  export import DefaultTypes = types;
  export type Tree = util.Tree;
  export type GenericModule = Record<string, DefaultTypes.AnyFunction> & {
    default: DefaultTypes.AnyFunction;
  };
  export interface GenericExport {
    exports?: GenericModule;
    id: string;
    loaded: boolean;
  }
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
  export interface Modules {
    loadModules?: () => Promise<void>;
    ChannelButtonClasses?: ChannelButtonClasses;
    ChannelItem?: GenericModule;
    Interactive?: GenericModule;
  }
}
export default Types;

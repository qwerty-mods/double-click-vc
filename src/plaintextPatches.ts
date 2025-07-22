import Types from "./types";
export default [
  {
    find: ".renderVoiceCallButton",
    replacements: [
      {
        match: "onClick:this.handleVoiceClick",
        replace: "onClick:()=>null,onDoubleClick:this.handleVoiceClick",
      },
      {
        match: /(this\.handleBrowserNotSupported.{50,75})onClick:/,
        replace: (_orig: string, prefix: string) => `${prefix}onClick:()=>null,onDoubleClick:`,
      },
    ],
  },
  {
    find: ".Masks.HEADER_BAR_BADGE_TOP",
    replacements: [
      {
        match: /onClick:(\w+\?void 0:)\w+,/,
        replace: (prefix, condition: string) =>
          `${prefix}onDoubleClick:${condition}arguments[0]?.onDoubleClick,`,
      },
    ],
  },
  {
    find: ".iconContainerWithGuildIcon",
    replacements: [
      {
        match: ".link,onClick:",
        replace: () =>
          `.link,onClick:()=>replugged?.plugins?.getExports('dev.kingfish.DoubleClickVC')?._handleClick(arguments[0]),onDoubleClick:`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];

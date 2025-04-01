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
] as Types.DefaultTypes.PlaintextPatch[];

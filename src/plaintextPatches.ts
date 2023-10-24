import * as Types from "./types";
export default [
  {
    find: ".renderVoiceCallButton",
    replacements: [
      {
        match: "onClick:this.handleVoiceClick",
        replace: "onClick:()=>null,onDoubleClick:this.handleVoiceClick",
      },
      {
        match: /(\.Messages\.START_VIDEO_CALL.{100,125})onClick:/,
        replace: (_orig: string, prefix: string) => `${prefix}onClick:()=>null,onDoubleClick:`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];

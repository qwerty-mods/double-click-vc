import { Injector, Logger, webpack } from "replugged";
import { Channel } from 'discord-types/general';

import { Tree, findInReactTree } from "./utils";

const inject = new Injector();
const logger = Logger.plugin("DoubleClickVC");

export async function start(): Promise<void> {
  const mod = await webpack.waitForModule<{
    [key: string]: (args: { channel: Channel, onClick: () => unknown, onDoubleClick: () => unknown }) => Tree;
  }>(webpack.filters.bySource(/,\w\(\)\.channelName/));
  const key = webpack.getFunctionKeyBySource<string>(mod, /,\w\(\)\.channelName/);

  if (mod && key) {
    inject.after(mod, key, (args, res) => {
      if (args[0].channel.type !== 2) return;

      try {
        // @ts-expect-error
        const obj = findInReactTree(res, e => Boolean(e?.onClick));

        if (obj) {
          // @ts-expect-error
          const onClick = obj.onClick;
          // @ts-expect-error
          obj.onDoubleClick = onClick;
          // @ts-expect-error
          obj.onClick = () => {};
        }
      } catch (err) {
        logger.error(err);
      }

      return res;
    });
  }
}

export function stop(): void {
  inject.uninjectAll();
}

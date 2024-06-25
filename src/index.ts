import { Injector, Logger } from "replugged";
export const PluginLogger = Logger.plugin("Double Click to VC");
export const PluginInjector = new Injector();
import Injections from "./injections/index";

export const start = (): void => {
  void Injections.applyInjections().catch((err) => PluginLogger.error(err));
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

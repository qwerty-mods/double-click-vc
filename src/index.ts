import { Injector, Logger } from "replugged";
export const PluginLogger = Logger.plugin("HideDisabledEmojis");
export const PluginInjector = new Injector();

import Injections from "./injections/index";

export const start = (): void => {
  void Injections.applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

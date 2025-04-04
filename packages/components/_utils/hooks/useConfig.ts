import { ConfigProviderProps } from "@jon-ui/components/config-provider/src/config-provider-props";
import {
  getCurrentInstance,
  inject,
  InjectionKey,
  provide,
  ref,
  Ref,
} from "vue";

export const ConfigContextKey: InjectionKey<Ref<ConfigProviderProps>> =
  Symbol("ConfigContextKey");

const globalConfig = ref<ConfigProviderProps>({
  namespace: "jn",
});
export const provideConfig = (config: Ref<ConfigProviderProps>) => {
  globalConfig.value = { ...globalConfig.value, ...config.value };
  provide(ConfigContextKey, config);
};

export function useConfig() {
  if (getCurrentInstance()) {
    return inject(ConfigContextKey, globalConfig);
  } else {
    return globalConfig;
  }
}

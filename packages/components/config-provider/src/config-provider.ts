import { provideConfig } from "@jon-ui/components/_utils/hooks/useConfig";
import { computed, defineComponent, renderSlot } from "vue";
import { configProviderProps } from "./config-provider-props";

export default defineComponent({
  name: "JnConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    const config = computed(() => ({ ...props }));
    provideConfig(config);
    return () => renderSlot(slots, "default", { config: config });
  },
});

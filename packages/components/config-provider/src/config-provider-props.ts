import { ExtractPropTypes } from "vue";

export const configProviderProps = {
  namespace: {
    type: String,
    default: "jn",
  },
};

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;

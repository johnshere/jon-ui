import { hyphenate } from "@vue/shared";
import { resolve } from "path";
import { ComponentResolver } from "unplugin-vue-components/types";
import { ComponentRoot, ThemeRoot } from "@jon-ui/builder";

interface ResolverOptions {
  importStyle?: boolean | "sass" | "scss" | "css";
}
function getSideEffects(
  compName: string,
  options?: ResolverOptions
): string[] | undefined {
  const { importStyle } = options || {};
  if (!importStyle) return;

  if (importStyle === "sass") {
    return [
      resolve(ThemeRoot, "src/base.scss"),
      resolve(ThemeRoot, `src/${compName}.scss`),
    ];
  } else if (importStyle === true || importStyle === "css") {
    return [
      resolve(ThemeRoot, "src/base.scss"),
      resolve(ThemeRoot, `src/${compName}.scss`),
    ];
  }
}
export function JonUIResolver(options?: ResolverOptions): ComponentResolver[] {
  return [
    {
      type: "component",
      resolve: (name: string) => {
        if (name.match(/^J[A-Z]/)) {
          const compName = hyphenate(name).slice(2);
          return {
            name,
            from: resolve(ComponentRoot, `${compName}/index.ts`),
            sideEffects: getSideEffects(compName, options),
          };
        }
      },
    },
  ];
}

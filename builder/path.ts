import { resolve } from "path";

export const ProjectRoot = resolve(__dirname, "..");

export const PackagesRoot = resolve(ProjectRoot, "packages");
export const ComponentRoot = resolve(PackagesRoot, "components");
export const ThemeRoot = resolve(PackagesRoot, "theme-chalk");
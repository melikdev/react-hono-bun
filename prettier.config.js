/** @type {import('prettier').Config} */
export const importOrder = [
  "^(react/(.*)$)|^(react$)",
  "^(hono/(.*)$)|^(hono$)",
  "^(drizzle-orm/(.*)$)|^(drizzle-orm$)",
  "^(@tanstack/react-router/(.*)$)|^(@tanstack/react-router$)",
  "^(@tanstack/(.*)$)|^(@tanstack$)",
  "",
  "<THIRD_PARTY_MODULES>",
  "",
  "^types$",
  "^@/shared/(.*)$",
  "^@/lib/(.*)$",
  "^@/hooks/(.*)$",
  "^@/components/ui/(.*)$",
  "^@/components/(.*)$",
  "",
  "^[./]",
];
export const importOrderParserPlugins = [
  "typescript",
  "jsx",
  "decorators-legacy",
];
export const plugins = ["@ianvs/prettier-plugin-sort-imports"];

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "**/node_modules/**",
      ".next/**",
      "out/**",
      "dist/**",
      "build/**",
      ".vercel/**",
      "coverage/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      indent: ["error", 2],
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      semi: ["error", "always"],
    },
  },
];

export default eslintConfig;
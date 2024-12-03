module.exports = {
  root: true,
  env: { browser: true, es2020: true, es6: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "react-app",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react", "prettier"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "es5",
        semi: false,
        singleQuote: true,
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
      },
    ],
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
  },
}

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "plugin:vitest-globals/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2022,
  },
  globals: {
    vi: true,
  },
  files: [".vue", ".js", ".ts"],
};

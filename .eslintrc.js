module.exports = {
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
  },
  settings: {
    react: {
      version: "16.9.0",
    },
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
  },
};
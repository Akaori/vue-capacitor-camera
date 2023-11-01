module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@vue/typescript/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "vue/no-deprecated-slot-attribute": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};

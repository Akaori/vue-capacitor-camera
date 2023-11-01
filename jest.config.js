module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testMatch: [
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  ],
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "/node_modules/(?!@ionic/vue|@ionic/vue-router|@ionic-native|@ionic|@stencil/core|ionicons)",
  ],
};

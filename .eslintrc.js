module.exports = {
  extends: [
    "airbnb",
    "plugin:jest/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "jest",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "sourceType": "module",
    "project": "./tsconfig.json",
  },
  rules: {
    "react/jsx-filename-extension": [
      "error", { 
        "extensions": [".jsx", ".tsx"] 
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".json", ".ts", ".tsx"]
      }
    }
  },
  env: { 
    browser: true,
    node: true,
    es6: true,
  },
}

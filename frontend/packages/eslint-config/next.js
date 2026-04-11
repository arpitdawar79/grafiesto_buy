import base from "./index.js"

export default [
  ...base,
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "react/jsx-key": "error",
    },
  },
]

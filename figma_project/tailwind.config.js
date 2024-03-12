const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "success-call": "#28C76F",
      "app-layover": "#283046",
      "app-background": "#161D31",
      "sub-title": "#B4B7BD",
    },
  },
  plugins: [],
});

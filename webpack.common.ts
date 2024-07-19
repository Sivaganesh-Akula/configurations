import { Configuration } from "webpack";
import path from "path";

const config: Configuration = {
  entry: "./src/index.ts",
  mode: "development",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "dist"),
  },
};
export default config;

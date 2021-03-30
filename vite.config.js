import path from "path";
import glob from "glob";
const htmlFiles = glob.sync(path.resolve(__dirname, "src", "*.html"));
export default {
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: htmlFiles,
    },
  },
};

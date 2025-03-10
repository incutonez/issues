import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default {
	// svgLoader is needed for material symbols
	plugins: [vue(), tailwindcss()],
	resolve: {
		alias: [{
			// Add ability to use @ to represent the root dir being src
			find: "@",
			replacement: path.resolve(path.resolve(), "./src"),
		}],
	},
};

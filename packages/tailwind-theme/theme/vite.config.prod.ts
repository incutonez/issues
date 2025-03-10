import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default {
	// svgLoader is needed for material symbols
	plugins: [vue(), tailwindcss(), dts({
		tsconfigPath: "tsconfig.build.json",
	})],
	resolve: {
		alias: [{
			// Add ability to use @ to represent the root dir being src
			find: "@",
			replacement: path.resolve(path.resolve(), "./src"),
		}],
	},
	build: {
		emptyOutDir: true,
		outDir: "dist",
		cssCodeSplit: true,
		cssMinify: false,
		lib: {
			entry: {
				// theme: "src/theme.css",
				main: "src/main.css",
			},
			formats: ["es"],
		},
		rollupOptions: {
			external: ["vue"],
		},
	},
};

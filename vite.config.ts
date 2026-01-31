import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { reactRouterHonoServer } from "react-router-hono-server/dev";
import babel from "vite-plugin-babel";

export default defineConfig({
	plugins: [
		reactRouterHonoServer({ runtime: "bun" }),
		reactRouter(),
		babel({
			filter: /\.[jt]sx?$/,
			babelConfig: {
				presets: ["@babel/preset-typescript"],
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
		tailwindcss(),
		tsconfigPaths(),
	],
	build: {
		outDir: "dist",
		sourcemap: false,
		rollupOptions: {
			external: ["bun"],
		},
	},
	server: {
		host: "0.0.0.0",
		port: 3000,
	},
});

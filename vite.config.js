import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                mainJs: resolve(__dirname, "./src/index.js"),
            },
        },
    },
});

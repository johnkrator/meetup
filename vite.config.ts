import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import favicon from "vite-plugin-favicon";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        favicon({
            logo: "./public/apple-touch-icon.png"
        })
    ],
});

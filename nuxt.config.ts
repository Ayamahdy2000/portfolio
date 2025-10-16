export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/styles/main.scss"],
  plugins: [
    {
      src: "~/plugins/bootstrap.js",
      mode: "client",
    },
  ],
  ssr: false,
  sourcemap: {
    server: true,
    client: true,
  },
});

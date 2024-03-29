<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script>
export default defineNuxtComponent({
  head() {
    return {
      htmlAttrs: {
        lang: "en",
      },
      title: "Aya mahdy",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "'Welcome to Aya Mahdy's website.I am senior frontend developer. Find my latest skills, and contact information.",
        },
        {
          name: "robots",
          content: "index,follow",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Aya Mahdy",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "'Welcome to Aya Mahdy's website.I am senior frontend developer. Find my latest skills, and contact information.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://master--ayamahdy.netlify.app" + "/favicon.ico",
        },
        // og
        {
          property: "og:title",
          content: "Aya Mahdy",
        },
        {
          property: "og:image",
          content: "https://master--ayamahdy.netlify.app" + "/favicon.ico",
        },
        {
          property: "og:description",
          content:
            "'Welcome to Aya Mahdy's website.I am senior frontend developer. Find my latest skills, and contact information.",
        },
      ],
    };
  },
});
</script>

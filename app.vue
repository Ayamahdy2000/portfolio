<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: "en" },
  title: "Aya Mahdy",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "description",
      content:
        "Welcome to Aya Mahdy's website. I am a senior frontend developer. Find my latest skills, and contact information.",
    },
    { name: "robots", content: "index,follow" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Aya Mahdy" },
    {
      name: "twitter:description",
      content:
        "Welcome to Aya Mahdy's website. I am a senior frontend developer. Find my latest skills, and contact information.",
    },
    {
      name: "twitter:image",
      content: "https://master--ayamahdy.netlify.app/favicon.ico",
    },
    // Open Graph
    { property: "og:title", content: "Aya Mahdy" },
    {
      property: "og:image",
      content: "https://master--ayamahdy.netlify.app/favicon.ico",
    },
    {
      property: "og:description",
      content:
        "Welcome to Aya Mahdy's website. I am a senior frontend developer. Find my latest skills, and contact information.",
    },
  ],
});
</script>

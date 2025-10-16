<template>
  <div class="container d-flex flex-column min-vh-100">
    <NavbarLayout />
    <main class="flex-grow-1">
      <slot></slot>
    </main>
    <FooterLayout />
  </div>
</template>

<script setup>
import FooterLayout from '~/components/layouts/FooterLayout.vue';
import NavbarLayout from '~/components/layouts/NavbarLayout.vue';
</script>

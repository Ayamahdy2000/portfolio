<template>
  <div class="container">
    <navbar-layout /> <slot></slot>
    <footer-layout />
  </div>
</template>
<script>
import FooterLayout from '~/components/layouts/FooterLayout.vue';
import NavbarLayout from "~/components/layouts/NavbarLayout.vue";
export default {
  components: { NavbarLayout, FooterLayout },
};
</script>

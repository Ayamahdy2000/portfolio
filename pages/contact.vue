<template>
  <div class="about contact">
    <div class="generic-title">
      <p>Contact us</p>
      <h5>Contact us</h5>
    </div>
    <h3 class="generic-sub-title">Let's Build Something Together</h3>
    <a
      href="mailto:aya.mahdy512000@gmail.com"
      class="about__desc"
      target="_blank"
    >
      <span
        ><img src="../assets/images/icon-email.svg" alt="icon email"
      /></span>
      aya.mahdy512000@gmail.com
    </a>
    <a href="tel:+201069446733" class="about__desc">
      <span
        ><img src="../assets/images/icon-phone.svg" alt="icon phone"
      /></span>
      +201069446733
    </a>
    <p class="about__desc mb-5">
      <span
        ><img src="../assets/images/icon-location.svg" alt="icon location"
      /></span>
      Ismailia - Egypt
    </p>
    <a
      class="generic-btn"
      href="https://drive.google.com/file/d/1lTieqxk7TrVI9Cr4MkP6xcxeLIaI4YmF/view"
      target="_blank"
    >
      Download My CV
    </a>
  </div>
</template>
<script>
import tabs from "~/components/tabs.vue";
export default {
  components: {
    tabs,
  },
  setup() {},
};
</script>

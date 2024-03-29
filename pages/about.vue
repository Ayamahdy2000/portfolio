<template>
  <div class="about">
    <div class="generic-title">
      <p>About me</p>
      <h5>About me</h5>
    </div>
    <h3 class="generic-sub-title">Senior Front-end Developer</h3>
    <p class="about__desc">
      I'm an Egyptian-based web designer & front‑end developer. I am passionate
      about building excellent software that improves the lives of those around
      me.
    </p>

     <h4 class="generic-sub-title generic-sub-title--sm">Experience</h4>
    <tabs :types="state.types" :isVertical="true" > </tabs>
  </div>
</template>
<script>
import tabs from "~/components/tabs.vue";
import { reactive } from "vue";
export default {
  components: {
    tabs,
  },
  setup() {
    const state = reactive({
      types: [
        {
          id: "TurnDigital",
          title: "TurnDigital",
          data: [
            { title: "Senior Frontend developer", date: "Nov 2023- Present" },
            { title: "Frontend developer", date: "May 2022- Nov 2023" },
          ],
        },
        {
          id: "BASS",
          title: "BASS",
          data: [{ title: "Frontend developer", date: "2021 - 2022" }],
        },
        {
          id: "HamzaSolutions",
          title: "Hamza Solutions",
          data: [{ title: "Frontend developer", date: "2021 - 2202" }],
        },
      ],
    });
    return {
      state,
    };
  },
};
</script>

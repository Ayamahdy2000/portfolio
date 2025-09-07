<template>
  <div class="about mb-5">
    <h4 class="generic-sub-title generic-sub-title--sm">Skills</h4>
    <tabs :types="state.types" :isVertical="false"> </tabs>
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
          id: "silkySysytems",
          title: "Technical Skills",
          data: [
            {
              title:
                "Professional at user interface development including HTML, CSS, SCSS, Bootstrap, and JS",
            },
            {
              title:
                "Professional at frontend development platforms technologies including Vue.js and Nuxt.Js.",
            },
            { title: "Angular" },
            {
              title:
                "Intermediate at integration with cms like Umbraco and Kentico",
            },
            { title: "UI/UX Design using Adobe XD" },
          ],
        },
        {
          id: "BASS",
          title: "Soft Skills",
          data: [
            { title: "Excellent communication skills" },
            {
              title:
                "Strong interpersonal skills with a proven ability to collaborate effectively in team environments",
            },
            {
              title:
                "Leadership capabilities demonstrated through mentorship and project management experiences",
            },
            { title: "Exceptional time management" },
          ],
        },
       
      ],
    });
    return {
      state,
    };
  },
};
</script>

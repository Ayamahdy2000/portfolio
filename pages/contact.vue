<template>
  <div class="about contact">
    <div class="generic-title">
      <p>Contact us</p>
      <h5>Contact us</h5>
    </div>
    <h3 class="generic-sub-title">Let's Build Something Together</h3>
    <p class="about__desc">
      <span
        ><img src="../assets/images/icon-email.svg" alt="icon email"
      /></span>
      aya.mahdy512000@gmail.com
    </p>
    <p class="about__desc">
      <span
        ><img src="../assets/images/icon-phone.svg" alt="icon phone"
      /></span>
      +201069446733
    </p>
    <p class="about__desc">
      <span
        ><img src="../assets/images/icon-location.svg" alt="icon location"
      /></span>
      Ismailia - Egypt
    </p>
    <button
      class="generic-btn"
      @click="downloadFile('Aya Mahdy Senior Frontend 11 - 2023.pdf')"
    >
      Download My CV
    </button>

    <a href="/AyaMahdy.pdf">download</a>

  </div>
</template>
<script>
import tabs from "~/components/tabs.vue";
export default {
  components: {
    tabs,
  },
  setup() {
    // console.log(file)
    const downloadFile = (fileName) => {
      fetch("static/AyaMahdy.pdf")
        .then((resp) => resp.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        });
    };
    return {
      downloadFile,
    };
  },
};
</script>

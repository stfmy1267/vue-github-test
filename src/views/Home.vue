<template>
  <div class="home">
    <img alt="Vue logo" class="mx-auto" src="../assets/vue.svg" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};

</script>

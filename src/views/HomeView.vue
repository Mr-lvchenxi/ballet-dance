<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 255px;
  height: 210px;
  background: #ffffff;
  box-shadow: 0px 8px 24px 0px #d3d3e6;
  border-radius: 26px;
}
</style>

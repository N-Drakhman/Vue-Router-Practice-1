<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const activePage = ref(1);
</script>

<template>
  <!-- SIDEBAR -->
  <div class="side-bar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/users">Users</RouterLink>
  </div>
</template>

<style scoped>
.side-bar {
  width: 25vw;
  height: 100vh;
  padding: 12px;
  background-color: rgb(52, 52, 52);

  display: flex;
  flex-direction: column;
}
</style>

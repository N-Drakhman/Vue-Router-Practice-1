<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";

const activePage = ref(1);
</script>

<template>
  <div class="board">
    
    <NavBar></NavBar>

    <div class="app__main">
      <!-- CONTENT -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.board {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
}
.side-bar {
  width: 19vw;
  height: 100vh;
  background-color: rgb(52, 52, 52);
  padding: 12px;
  display: flex;
  flex-direction: column;
}

.app__main {
  padding: 15px;
}
</style>

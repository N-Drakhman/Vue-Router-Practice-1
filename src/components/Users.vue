<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const users = ref(["User-1", "User-2", "User-3", "User-4", "User-5", "User-6"]);
</script>

<template>
  <h1>Users</h1>
  <ul>
    <li v-for="user in users">
      <RouterLink :to="/users/ + user">{{ user }}</RouterLink>
    </li>
  </ul>
</template>

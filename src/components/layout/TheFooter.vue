<template>
  <footer>
    <h1><a href="">RentIt</a></h1>
    <nav>
      <base-badge>BEST PRICES FOREVER</base-badge>
    </nav>
  </footer>
</template>

<script setup>
import BaseBadge from '../ui/BaseBadge.vue';
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* flex-direction: column; */
  padding: 0;
  margin: 10px;
  position: sticky;
  left: 0;
  bottom: 10px;
  /* width: 100%; */
  text-align: center;
  /* text-decoration: none; */
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
}
a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}
</style>

<template>
  <the-header></the-header>
  <home-page></home-page>
  <the-footer></the-footer>
</template>

<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import HomePage from './components/layout/HomePage.vue';
import TheFooter from './components/layout/TheFooter.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Playwrite+FR+Moderne:wght@100..400&display=swap');

html {
  font-family: 'Bitter', serif;
  /* font-style: italic; */
}
</style>

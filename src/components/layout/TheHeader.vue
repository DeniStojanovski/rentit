<template>
  <header>
    <h1><a href="">RentIt</a></h1>
    <nav>
      <h3><a href="">Cars</a></h3>
      <h3><a href="">Contact</a></h3>
      <base-button>Login</base-button>
    </nav>
  </header>
</template>

<script setup>
// import BaseBadge from '../ui/BaseBadge.vue';
import BaseButton from '../ui/BaseButton.vue';
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-image: url('https://www.freewebheaders.com/wp-content/gallery/cars/cars-header-2129-1024x300.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  /* background-position: fixed; */
  position: sticky;
  border-radius: 15px 0;
  left: 0;
  top: 10px;
  /* width: 100vh; */
  margin-bottom: auto;
  /* position: fixed; */
  /* height: 100vh; */
  margin: 0;
  padding: 0.5rem;
  /* border: 1px solid blue; */
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  /* border: 1px solid red; */
  /* width: 290px; */
  margin: 0;
  padding: 0.5rem;
}

h1 {
  font-style: italic;
  padding: 0.5rem;
}

a {
  padding: 0.5rem;
  text-decoration: none;
  color: rgb(255, 255, 255);
}

button {
  /* font-style: oblique; */
  color: rgb(0, 0, 0);
}
</style>

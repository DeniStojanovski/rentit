<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <!-- <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link> -->
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.2rem 1rem;
  font: inherit;
  /* background-color: #ffffff; */
  border: 1px solid #000000;
  color: rgb(0, 0, 0);
  cursor: pointer;
  border-radius: 10px;
  /* margin-right: 0.5rem; */
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #898989;
  border-color: #000000;
  border-radius: 10px;
}

/* .flat {
  background-color: transparent;
  color: #797979;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #484848;
  color: #393939;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #7a7a7a;
  border-radius: 10px;
} */
</style>

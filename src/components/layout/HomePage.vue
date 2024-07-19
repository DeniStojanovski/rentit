<template>
  <div class="container">
    <h1>RentIt - easy and cheap</h1>
    <form action="">
      <div class="form-control">
        <label for="pickup">Pick-up Location:</label>
        <input
          aria-labelledby="pick up location"
          type="text"
          name=""
          id="pickup"
          @keyup="refreshSearch"
          v-model.trim="searchTerm"
          placeholder="city, airport, station, region..."
        />
      </div>
      <ul class="auto-gen-list">
        <li v-for="(locations, index) in filteredLocations" :key="index">
          <a href="#">
            <div
              :class="{
                airport: locations.placeType == 'A',
                city: locations.placeType == 'C',
                train: locations.placeType == 'T',
              }"
            >
              <!-- {{ locations.bookingId | stripId }} -->
            </div>
            <div class="location">
              {{ locations.name }}
              {{ locations.iata ? `(${locations.iata})` : '' }}
              <br />
              <span class="geographic">
                {{ locations.region ? locations.region : '' }}
                {{ locations.country ? locations.country : '' }}
              </span>
            </div>

            <div class="popular" v-show="locations.isPopular">
              <span> popular </span>
            </div>
          </a>
        </li>
      </ul>
    </form>

    <div class="#app">
      <!-- <car-list></car-list> -->
      <car-details></car-details>
      <car-request></car-request>
    </div>
    <nav>
      <base-button>SALES</base-button>
      <base-button>ORDER</base-button>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
// import CarList from '../../pages/cars/CarList.vue';
import CarDetails from '../../pages/cars/CarDetails.vue';
import CarRequest from '../../components/requests/CarRequest.vue';
import BaseButton from '../ui/BaseButton.vue';

const data = ref([]);
const searchTerm = ref('');
const isLoading = ref(true);

const refreshSearch = function () {
  if (searchTerm.value !== '' && searchTerm.value.length >= 2) {
    isLoading.value = true;
    axios
      .get(
        `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=10&solrTerm=${searchTerm.value}`
      )
      .then(res => {
        isLoading.value = false;
        data.value = res.data.results.docs;
      })
      .catch(err => {
        console.log('Error is ' + err);
      });
  } else {
    data.value = [];
  }
};

const filteredLocations = computed(() => {
  return data.value.filter(posts => {
    return posts;
  });
});
</script>

<style scoped>
.container {
  color: rgb(0, 0, 0);
  /* background-image: url('https://i.pinimg.com/736x/97/21/e7/9721e77f1ff932f697c9f329e68e725c.jpg');
  background-size: 100%;
  background-repeat: no-repeat; */
  box-sizing: border-box;
  border-radius: 15px 0;
  height: 100%;
  width: 100%;
  /* margin: 10px; */
  /* padding: 10px; */
}
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 10px; */
}
.form-control {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
}
ul {
  color: rgb(0, 0, 0);
  /* border: 1px solid black; */
  text-align: center;
  list-style-type: none;
  margin: 10px;
  padding: 10px;
}
li {
  color: rgb(0, 0, 0);
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}
a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  margin-top: 60px;
}
nav {
  /* font-style: inherit; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>

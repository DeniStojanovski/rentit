<template>
  <div class="container">
    <div class="form-control">
      <label for="car">Search for a car:</label>
      <input
        aria-labelledby="pick up location"
        type="text"
        name=""
        id="car"
        @keyup="fetchCarDetails"
        v-model.trim="searchTerm"
        placeholder="make, model, year, transmission..."
      />
    </div>
    <ul>
      <li v-for="car in cars" :key="car.id">
        {{ car.make }} {{ car.model }} ({{ car.year }})
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchTerm: '',
      cars: [],
      isLoading: true,
    };
  },
  methods: {
    async fetchCarDetails() {
      if (this.searchTerm !== '' && this.searchTerm.length >= 2) {
        this.isLoading = true;
        const url = `https://api.api-ninjas.com/v1/cars?model=${this.searchTerm}`;

        try {
          const response = await axios.get(url, {
            headers: {
              'X-Api-Key': '+8wQbsmq7WwVNYvOPa7YTQ==CqfIlyHkjdQ9Ozn1',
            },
          });
          console.log('API response:', response.data);

          (this.isLoading = false),
            (this.cars = response.data.filter(result => ({
              id: result.id,
              make: result.make,
              model: result.model,
              year: result.year,
              transmission: result.transmission,
            })));
        } catch (error) {
          console.error('Error fetching car details:', error);
        }
      } else {
        this.cars = [];
      }
    },
    //     const refreshSearch = function () {
    //   if (searchTerm.value !== '' && searchTerm.value.length >= 2) {
    //     isLoading.value = true;
    //     axios
    //       .get(
    //         `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=10&solrTerm=${searchTerm.value}`
    //       )
    //       .then(res => {
    //         isLoading.value = false;
    //         data.value = res.data.results.docs;
    //       })
    //       .catch(err => {
    //         console.log('Error is ' + err);
    //       });
    //   } else {
    //     data.value = [];
    //   }
    // };
  },
  computed: {
    filteredCars() {
      return this.cars.filter(posts => {
        return posts;
      });
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 5px;
  cursor: pointer;
}
</style>

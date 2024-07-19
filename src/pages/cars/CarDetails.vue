<template>
  <div>
    <h1>Car Details</h1>
    <form @submit.prevent="fetchCarDetails">
      <div>
        <label for="make">Make:</label>
        <input type="text" v-model="make" id="make" required />
      </div>
      <!-- <div>
        <label for="model">Model:</label>
        <input type="text" v-model="model" id="model" required />
      </div> -->
      <!-- <div>
        <label for="year">Year:</label>
        <input type="text" v-model="year" id="year" required />
      </div> -->
      <base-button type="submit">Get Details</base-button>
    </form>
    <!-- <date-request></date-request> -->
    <div v-if="carDetails && carDetails.length > 0">
      <h2>Car List</h2>
      <ul>
        <li v-for="(car, index) in carDetails" :key="index">
          <p><strong>Make:</strong> {{ car.make }}</p>
          <p><strong>Model:</strong> {{ car.model }}</p>
          <p><strong>Year:</strong> {{ car.year }}</p>
          <p><strong>Class:</strong> {{ car.class }}</p>
          <p><strong>Fuel Type:</strong> {{ car.fuel_type }}</p>
          <p><strong>Transmission:</strong> {{ car.transmission }}</p>
        </li>
      </ul>
    </div>
    <div v-else-if="error">
      <p>Error: {{ error }}</p>
    </div>
  </div>
</template>

<script>
import BaseButton from '../../components/ui/BaseButton.vue';
// import DateRequest from '../../components/requests/DateRequest.vue';
import { getCarDetails } from '../../services/carService.js';

export default {
  data() {
    return {
      make: '',
      model: '',
      year: '',
      carDetails: null,
      error: null,
    };
  },
  components: {
    BaseButton,
    // DateRequest,
  },
  methods: {
    async fetchCarDetails() {
      try {
        this.error = null;
        this.carDetails = await getCarDetails(this.make, this.model, this.year);
      } catch (error) {
        console.error('Error fetching car details:', error);
        this.error = 'Failed to fetch car details';
        this.carDetails = null;
      }
    },
  },
};
</script>

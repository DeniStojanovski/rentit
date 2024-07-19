<template>
  <div class="container">
    <h1>Car Rental</h1>
    <date-picker
      is-expanded
      v-model.range="selectedDates"
      mode="range"
      :attributes="attributes"
    ></date-picker>
    <!-- <vc-calendar
      is-expanded
      v-model="selectedDates"
      mode="range"
      :attributes="attributes"
    ></vc-calendar> -->
    <div class="input">
      <label for="base-rate">Base Rate ($):</label>
      <input type="number" v-model.number="baseRate" id="base-rate" required />
    </div>
    <base-button @click="calculateRate">Calculate Rate</base-button>
    <div v-if="calculatedRate !== null" class="calculation">
      <h2>Selected Dates:</h2>
      <p>From: {{ selectedDates.start }}</p>
      <p>To: {{ selectedDates.end }}</p>
      <h2>Calculated Rate: ${{ calculatedRate }}</h2>
    </div>
    <!-- <date-request></date-request> -->
  </div>
</template>

<script>
// import DateRequest from './DateRequest.vue';
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: {
    DatePicker,
    // DateRequest,
    BaseButton,
  },
  data() {
    return {
      selectedDates: {
        start: new Date(),
        end: new Date(),
      },
      baseRate: 30, // Example base rate per day
      calculatedRate: null,
    };
  },
  computed: {
    attributes() {
      if (this.selectedDates.start && this.selectedDates.end) {
        return [
          {
            key: 'selected-dates',
            highlight: true,
            dates: {
              start: this.selectedDates.start,
              end: this.selectedDates.end,
            },
          },
        ];
      }
      return [];
    },
  },
  methods: {
    calculateRate() {
      if (this.selectedDates.start && this.selectedDates.end) {
        const startDate = new Date(this.selectedDates.start);
        const endDate = new Date(this.selectedDates.end);
        const dayCount =
          Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1; // Including both start and end dates

        let rate = this.baseRate * dayCount;

        // Example logic to increase/decrease rate based on selected dates
        // Adjust rate as needed. Here, increasing rate by 10% on weekends
        for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
          const day = d.getDay();
          if (day === 0 || day === 6) {
            // Increase rate by 10% on weekends
            rate += this.baseRate * 0.1;
          }
        }

        this.calculatedRate = rate.toFixed(2);
      } else {
        alert('Please select a valid date range.');
      }
    },
  },
};
</script>

<!-- <style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: sticky; */
}
vc-calendar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.input {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.calculation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
</style> -->

<template>
  <!-- <Calendar /> -->
  <!-- <DatePicker v-model="date"> -->
  <!-- <vc-calendar></vc-calendar> -->
  <DatePicker v-model="selectedDates"></DatePicker>
</template>

<script>
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

export default {
  components: {
    // Calendar,
    DatePicker,
  },
  data() {
    return {
      date: new Date(),
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
};
</script>

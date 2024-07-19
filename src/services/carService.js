import axios from 'axios';

const API_KEY = '+8wQbsmq7WwVNYvOPa7YTQ==CqfIlyHkjdQ9Ozn1';
const BASE_URL = 'https://api.api-ninjas.com/v1/cars';

export const getCarDetails = async (make, model, year) => {
  const url = `${BASE_URL}?make=${make}&model=${model}&year=${year}`;
  try {
    const response = await axios.get(url, {
      headers: {
        'X-Api-Key': API_KEY,
      },
    });

    // Extract relevant details from the response
    return response.data.map(car => ({
      make: car.make,
      model: car.model,
      year: car.year,
      class: car.class,
      fuel_type: car.fuel_type,
      transmission: car.transmission,
    }));
  } catch (error) {
    console.error('Failed to fetch car details:', error);
    throw error;
  }
};

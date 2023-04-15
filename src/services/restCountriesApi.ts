import axios from "axios";

export const getAllCountriesData = async () => {
  const response = await axios.get('/all');
  const data = response.data;

  return await data.json();
}
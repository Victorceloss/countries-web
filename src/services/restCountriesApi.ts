import axios from "axios";
import axiosInstance from "../config/axiosConfig";

export const getAllCountriesData = async () => {
  const response = await axiosInstance.get('/all');
  const data = response.data;

  return await data;
}
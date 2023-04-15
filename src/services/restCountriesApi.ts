import axios from "axios";
import axiosInstance from "../config/axiosConfig";

export interface Country {
  name: string,
  capital: string,
  population: string
}

export const getAllCountriesData = async (): Promise<Country[]> => {
  const response = await axiosInstance.get('/all');
  const data = response.data;

  return await data;
}
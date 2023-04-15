import React, { useEffect, useState } from "react";

import '../styles/Home.css';
import { Header } from "../components/Header/Header";
import { getAllCountriesData, Country } from "../services/restCountriesApi";

const Home: React.FC = (): JSX.Element => {
  const [allCountries, setAllCountries] = useState<Country[]>([]);

  const setAllCountriesData = async (): Promise<void> => {
    const countriesData = await getAllCountriesData();
    setAllCountries(countriesData);
  }

  useEffect(() => {
    setAllCountriesData();
  }, []);

  console.log(allCountries);

  return (
    <>
    <Header />
    <main className="main">
      <section className="main-section-search">
        <input type="text" name="name-country" className="input-name" placeholder="Ex: United States..." />
        <button className="button-search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </section>
      <section className="main-section-all">

      </section>
    </main>
    </>
  );
};

export default Home;
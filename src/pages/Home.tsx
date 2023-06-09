import React, { useEffect, useState } from "react";

import '../styles/Home.css';
import { Header } from "../components/Header/Header";
import { getAllCountriesData} from "../services/restCountriesApi";
import { Country } from "../components/Country/Country";

const Home: React.FC = (): JSX.Element => {
  const [allCountries, setAllCountries] = useState([]);

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
        {allCountries && allCountries.map((country, index:number) => {
          return (
            <Country countryData={country} key={index} />
          )
        })}
      </section>
    </main>
    </>
  );
};

export default Home;
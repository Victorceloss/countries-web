import React from "react";

import './Country.css';
import { Link } from "react-router-dom";

interface CountryData {
  name: {
    common: string,
    official: string
  },
  flags: {
    alt: string,
    png: string
  }
  capital: string,
  population: number
}

type CountryProps = {
  countryData: CountryData;
}

export const Country: React.FC<CountryProps> = ({countryData}) => {
  return (
    <Link to={`/info/${countryData.name.common}`}>
    <article className="all-article">
      <div className="article-image">
        <img src={countryData.flags.png} alt={countryData.flags.alt} className="image-content" />
      </div>
      <div className="article-text">
        <h2 className="text-content" id="country-name">{countryData.name.common}</h2>
        <h2 className="text-content">Population: {countryData.population.toLocaleString("pt-BR")}</h2>
        <h2 className="text-content">Capital: {countryData.capital}</h2>
      </div>
    </article>
    </Link>
  );
};
import React from "react";

import './Country.css';

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
    <article className="all-article">
      <div className="article-image">
        <img src={countryData.flags.png} alt={countryData.flags.alt} />
      </div>
      <div className="article-text">
        <h2 className="text-content">{countryData.name.common}</h2>
        <h2 className="text-content">{countryData.population}</h2>
        <h2 className="text-content">{countryData.capital}</h2>
      </div>
    </article>
  );
};
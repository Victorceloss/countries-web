import React from "react";

import { Header } from "../components/Header/Header";

const Home: React.FC = (): JSX.Element => {
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
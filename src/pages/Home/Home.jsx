import "./Home.css";
import { Header } from "../../components/Header/Header";
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { DarkMode } from "../../components/DarkMode/DarkMode";
import { Popup } from "../../components/Popup/Popup";
import { Card } from "../../components/Card/Card";
import { useEffect, useState } from "react";

export const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  // 1025 einträge, der Rest sind spezielle Formen von pokemon
  // https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1025
  //izel die lösung für die ladezeiten mal schauen
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((apiData) => setPokemonData(apiData))
      .catch((error) => console.error("Error in Home.jsx fetch", error));
  }, []);
  console.log(pokemonData);

  return (
    <main>
      <h1>Home</h1>
      <Header />
      <div>
        <BurgerMenu />
        <SearchBar />
        <DarkMode />
      </div>

      <section className="home__cardContainer">
        {pokemonData.results ? pokemonData?.results.map((item, index) => <Card imgURL={item?.url} key={index} title={item.name} />) : <p>loading...</p>}
      </section>
      <Popup />
    </main>
  );
};

import "./Details.css";
import "../Details/Details";
import { Header } from "../../components/Header/Header";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { DarkMode } from "../../components/DarkMode/DarkMode";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  //  --- useState
  const [singlePokemon, setSinglePokemon] = useState([]);
  // --- store link id
  const { id } = useParams();
  const testId = 1;
  // --- fetch
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Number(id)}`)
      .then((res) => res.json())
      .then((fetchData) => setSinglePokemon(fetchData))
      .catch((err) => console.error("fetch error at detailpage"));
  }, []);
  // singlePokemon && console.log(singlePokemon);
  // console.log(singlePokemon.types);
  return (
    <>
      <Header />

      {singlePokemon.sprites ? (
        <div className="detail">
          <div className="detail__image-headline">
            <div className="detail__image_wrapper">
              <img
                src={singlePokemon.sprites.other.home.front_default}
                alt="{singlePokemon.name}"
              />
            </div>
            <p className="detail__id-name">
              #{singlePokemon.id} {singlePokemon.name}
            </p>
          </div>
          <div className="detail__types">
            {singlePokemon.types.map((item, index) => (
              <p key={index}>{item.type.name}</p>
            ))}
          </div>
        </div>
      ) : (
        <p>Laden...</p>
      )}
    </>
  );
};

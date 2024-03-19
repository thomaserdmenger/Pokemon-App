import "./Popup.css";
import { colors } from "../../assets/data/data";
import { useState, useEffect } from "react";
import { Header } from "../Header/Header";

export const Popup = ({ setTogglePopup, setPokemonTypeData }) => {
  const [type, setType] = useState([]);
  const [typeURL, setTypeURL] = useState("");

  // Fetch Data From Type API
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setType(data.results));
  }, []);

  // Fetch Pokemon per Type
  const handlePokemonData = () => {
    if (typeURL !== "") {
      fetch(typeURL)
        .then((res) => res.json())
        .then((data) => {
          setPokemonTypeData(data);
        });
    }

    setTogglePopup((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="popup__header">
        <Header />
        <svg
          onClick={handlePokemonData}
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill=""
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z"
            fill=""
          />
        </svg>
      </div>
      <main>
        <section className="popup">
          <img
            className="popup__heading"
            src="/public/images/type.png"
            alt="Type Logo"
          />
          <div className="popup__form">
            <div className="popup__grid">
              {type.map((item, index) => {
                return (
                  <div
                    className="popup__grid__items"
                    key={index}
                    style={{
                      backgroundColor: colors[item.name],
                      border:
                        typeURL === item.url
                          ? "2px solid red"
                          : "2px solid black"
                    }}
                    onClick={() => setTypeURL(item.url)}>
                    {item.name !== "unknown" && item.name}
                  </div>
                );
              })}
            </div>
            <button
              className="popup__button-search"
              onClick={handlePokemonData}>
              Search
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

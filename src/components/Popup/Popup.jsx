import "./Popup.css"
import { colors } from "../../assets/data/data"
import { useState, useEffect } from "react"

export const Popup = ({ setTogglePopup, setPokemonTypeData }) => {
  const [type, setType] = useState([])
  const [typeURL, setTypeURL] = useState("")
  // const [pokemonTypeData, setPokemonTypeData] = useState([])

  // Fetch Data From Type API
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setType(data.results))
  }, [])

  // Fetch Pokemon per Type
  const handlePokemonData = () => {
    if (typeURL !== "") {
      fetch(typeURL)
        .then((res) => res.json())
        .then((data) => {
          setPokemonTypeData(data)
        })
    }

    setTogglePopup((prevValue) => !prevValue)
  }

  // # Pokemondata in Komponente von Anna, damit der Content gerendert wird

  return (
    <main>
      <section className='popup'>
        <img
          className='popup__heading'
          src='/public/images/type.png'
          alt='Type Logo'
        />
        <div className='popup__form'>
          <div className='popup__grid'>
            {type.map((item, index) => {
              return (
                <div
                  className='popup__grid__items'
                  key={index}
                  style={{
                    backgroundColor: colors[item.name],
                    border:
                      typeURL === item.url ? "2px solid red" : "2px solid black"
                  }}
                  onClick={() => setTypeURL(item.url)}>
                  {item.name !== "unknown" && item.name}
                </div>
              )
            })}
          </div>
          <button className='popup__button-search' onClick={handlePokemonData}>
            Search
          </button>
        </div>
      </section>
    </main>
  )
}

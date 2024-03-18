import "./Popup.css"
import { colors } from "../../assets/data/data"
import { useState, useEffect } from "react"

export const Popup = () => {
  const [type, setType] = useState([])
  const [typeURL, setTypeURL] = useState("")
  const [pokemonData, setPolemonData] = useState([])

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
        .then((data) => console.log(data))
    }
  }

  // # Pokemondata in Komponente von Anna, damit der Content gerendert wird

  return (
    <main>
      <section className='popup'>
        <h1 className='popup__heading'>Type</h1>
        <div className='popup__form'>
          <div className='popup__grid'>
            {type.map((item, index) => {
              return (
                <p
                  className='popup__grid__items'
                  key={index}
                  value={typeURL}
                  onClick={() => setTypeURL(item.url)}>
                  {item.name !== "unknown" && item.name}
                </p>
              )
            })}
          </div>
          <button onClick={handlePokemonData}>Search</button>
        </div>
      </section>
    </main>
  )
}

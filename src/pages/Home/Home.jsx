import "./Home.css"
import { Header } from "../../components/Header/Header"
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import { DarkMode } from "../../components/DarkMode/DarkMode"
import { Popup } from "../../components/Popup/Popup"
import { Card } from "../../components/Card/Card"
import { useEffect, useState } from "react"

export const Home = () => {
  // State for Pokemon Data for Home Page
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonFilteredData, setPokemonFilteredData] = useState([])
  console.log(pokemonFilteredData)

  // State for Burger Menu
  const [togglePopup, setTogglePopup] = useState(false)
  // console.log(togglePopup)

  // State for Pokemon Data per Type form Popup
  const [pokemonTypeData, setPokemonTypeData] = useState([])

  // User Input
  const [searchResult, setSearchResult] = useState("")

  // 1025 einträge, der Rest sind spezielle Formen von pokemon
  // https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1025
  //izel die lösung für die ladezeiten mal schauen
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((apiData) => setPokemonData(apiData))
      .catch((error) => console.error("Error in Home.jsx fetch", error))
  }, [])
  // console.log(pokemonData);

  // Filter Pokemon Data for Home Page per User Input
  useEffect(() => {
    const filteredData = pokemonData?.results?.filter((item) =>
      item.name.toLowerCase().includes(searchResult.toLowerCase())
    )
    setPokemonFilteredData(filteredData)
  }, [searchResult])

  return (
    // ! Home Page mit Standard Pokemon
    <>
      <div>
        {!togglePopup && pokemonTypeData.length === 0 && (
          <main>
            <Header />
            <div className='home__search-container'>
              <BurgerMenu
                setTogglePopup={setTogglePopup}
                togglePopup={togglePopup}
              />
              <SearchBar
                setSearchResult={setSearchResult}
                searchResult={searchResult}
              />
              <DarkMode />
            </div>
            {searchResult.length === 0 ? (
              <section className='home__cardContainer'>
                {pokemonData.results ? (
                  pokemonData?.results.map((item, index) => (
                    <Card imgURL={item?.url} key={index} title={item.name} />
                  ))
                ) : (
                  <p>loading...</p>
                )}
              </section>
            ) : (
              <section className='home__cardContainer'>
                {pokemonFilteredData ? (
                  pokemonFilteredData.map((item, index) => (
                    <Card imgURL={item?.url} key={index} title={item.name} />
                  ))
                ) : (
                  <p>loading...</p>
                )}
              </section>
            )}
          </main>
        )}
      </div>

      {/* ! Popup */}
      <div>
        {togglePopup && (
          <Popup
            setTogglePopup={setTogglePopup}
            setPokemonTypeData={setPokemonTypeData}
          />
        )}
      </div>
      {/* Home Page mit Type Pokemon */}
      <div>
        {!togglePopup && pokemonTypeData.length !== 0 && (
          <main>
            <Header />
            <div>
              <BurgerMenu
                setTogglePopup={setTogglePopup}
                togglePopup={togglePopup}
              />
              <SearchBar />
              <DarkMode />
            </div>
            <section className='home__cardContainer'>
              {pokemonTypeData?.pokemon ? (
                pokemonTypeData?.pokemon.map((item, index) => (
                  <Card
                    imgURL={item?.pokemon?.url}
                    key={index}
                    title={item?.pokemon?.name}
                  />
                ))
              ) : (
                <p>loading...</p>
              )}
            </section>
          </main>
        )}
      </div>
    </>
  )
}

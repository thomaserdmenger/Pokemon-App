import "./Popup.css"
import { useState, useEffect } from "react"

export const Popup = () => {
  const [type, setType] = useState([])
  console.log(type)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setType(data.results))
  }, [])

  return (
    <main>
      <section className='popup'>
        <h1 className='popup__heading'>Type</h1>
        <form className='popup__form'>
          <div className='popup__grid'>
            {type.map((item, index) => {
              return (
                <p className='popup__grid__items' key={index}>
                  {item.name !== "unknown" && item.name}
                </p>
              )
            })}
          </div>
          <input type='submit' value='Search' />
        </form>
      </section>
    </main>
  )
}

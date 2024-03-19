import "./DarkMode.css"
import { useState } from "react"

export const DarkMode = () => {
  // # State in App JSX und über useContext verteilen
  const [darkMode, setDarkMode] = useState(false)
  // console.log(darkMode)

  return (
    <div className='darkMode'>
      <svg
        onClick={() => setDarkMode(!darkMode)}
        className='darkMode__image'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'>
        <path d='M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z' />
      </svg>
    </div>
  )
}

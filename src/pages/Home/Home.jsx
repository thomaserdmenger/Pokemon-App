import "./Home.css"
import { Header } from "../../components/Header/Header"
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import { DarkMode } from "../../components/DarkMode/DarkMode"
import { Popup } from "../../components/Popup/Popup"

export const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <Header />
      <div>
        <BurgerMenu />
        <SearchBar />
        <DarkMode />
      </div>
      <Popup />
    </main>
  )
}

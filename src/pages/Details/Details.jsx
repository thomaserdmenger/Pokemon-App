import "../Details/Details"
import { Header } from "../../components/Header/Header"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import { DarkMode } from "../../components/DarkMode/DarkMode"

export const Details = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <SearchBar />
          <DarkMode />
        </div>
      </main>
    </>
  )
}

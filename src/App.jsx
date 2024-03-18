import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Details } from "./pages/Details/Details"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

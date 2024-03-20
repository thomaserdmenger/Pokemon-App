import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Details } from "./pages/Details/Details";
import { darkModeContext } from "./context/Context";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "wrapper dark" : "wrapper"}>
      <darkModeContext.Provider value={{ setDarkMode, darkMode }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </darkModeContext.Provider>
    </div>
  );
}

export default App;

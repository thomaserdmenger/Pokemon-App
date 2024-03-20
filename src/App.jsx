import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Details } from "./pages/Details/Details";
import { darkModeContext } from "./context/Context";
import { useEffect, useState } from "react";
import { Loading } from "./pages/Loading/Loading";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={darkMode ? "wrapper dark" : "wrapper"}>
          <darkModeContext.Provider value={{ setDarkMode, darkMode }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/:id" element={<Details />} />
                <Route path="/loading" element={<Loading />} />
              </Routes>
            </BrowserRouter>
          </darkModeContext.Provider>
        </div>
      )}
    </>
  );
}

export default App;

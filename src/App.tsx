import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./styles/index.scss";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>Эбаут</Link>
            <div>
                <button onClick={toggleTheme}>Toggle</button>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync />} />
                    <Route path={"/"} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;

import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./styles/index.scss";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>Эбаут</Link>
            <div>
                <button onClick={toggleTheme}>Toggle</button>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={"/about"} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;

import React, { Suspense, useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../src/styles/index.scss";
import MainPage from "./pages/mainPage/mainPage";
import AboutPage from "./pages/aboutPage/aboutPage";
import { ThemeContext } from "./theme/themeContext";

export enum Theme {
    LITE = 'lite',
    DARK = 'dark',
}


const App = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LITE : Theme.DARK)
    }

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'} >Главная</Link>
            <Link to={'/about'}>странице</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />

                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
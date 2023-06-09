import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, } from "react-router-dom";
import { Movies, MoviesInformation, Profile, Actors, NavBar } from "./index";
import useStyles from "./styles"

const App = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <main className={classes.content}>

            <div className={classes.toolbar}/>

                <Routes>
                    <Route exact path="/moviesinfo/:id" element={<MoviesInformation />} />
                    <Route exact path="/actors/:id" element={<Actors />} />
                    <Route exact path="/profile/:id" element={<Profile />} />
                    <Route path="/" element={<Movies />} />



                </Routes>
            </main>
        </div>
    )

};

export default App;

import axios from "axios";
import secret from "./key/secret";
import "regenerator-runtime";
import "./components/container";
import "./components/card";
require("./style/styles.css");

const loadData = () => {
    const hash = window.location.hash.substr(1);

    if (hash == "home" || hash == "") {
        getData(
            "Upcoming Movies",
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${secret}&language=en-US&page=1`
        );
    } else if (hash == "top-rated") {
        getData(
            "Top Rated Movies",
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${secret}&language=en-US`
        );
    } else if (hash == "popular") {
        getData(
            "Popular Movies",
            `https://api.themoviedb.org/3/movie/popular?api_key=${secret}&language=en-US`
        );
    } else if (hash == "now-playing") {
        getData(
            "Now Playing Movies",
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${secret}&language=en-US`
        );
    }
};

const getData = async (page, url) => {
    document.getElementById(
        "main"
    ).innerHTML = `<page-container page="${page}"/>`;

    try {
        const result = await axios.get(
            "https://api.themoviedb.org/3/genre/movie/list?api_key=4c6037d9885135cf781bc0ebf9a27596&language=en-US"
        );
        const movies = await axios.get(url);
        movies.data.results.forEach((movie) => {
            let genres = [];

            result.data.genres.forEach((genre) => {
                movie.genre_ids.forEach((movieGenre) => {
                    if (genre.id === movieGenre) {
                        genres.push(genre.name);
                    }
                });
            });
            console.log(movies);
            document.getElementById(
                "movies-container"
            ).innerHTML += `<card-movie  title="${movie.original_title}" overview="${movie.overview}" 
            pic="https://image.tmdb.org/t/p/w500/${movie.poster_path}" rating="${movie.vote_average}" test="['a','b']"/>`;
        });
    } catch (error) {
        console.log(error);
    }
};

window.addEventListener("load", loadData);
window.addEventListener("hashchange", loadData);

import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(requests.fetchNetflixOriginals);
  //     setMovie(
  //       request.data.results[
  //         Math.floor(Math.random() * requests.data.requests.length - 1)
  //       ]
  //     );
  //     return request;
  //   }
  //   fetchData();
  // }, []);
  // console.log(movie);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log("Request Data:", request.data); // Log the data received

        // Corrected: Access the 'results' property from the response
        const movies = request.data.results;

        // Check if there are movies before setting the state
        if (movies && movies.length > 0) {
          setMovie(movies[Math.floor(Math.random() * movies.length)]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  console.log(movie);
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          <h1 className="banner_description">
            {truncate(movie?.overview, 250)}
          </h1>
        </h1>
      </div>
      <div className="banner_fadebottom" />
    </header>
  );
};

export default Banner;

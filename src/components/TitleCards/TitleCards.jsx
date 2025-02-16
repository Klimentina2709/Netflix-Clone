import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODY5NWY5ZTAwNzlkZTM0NjBhNjczMGE4ODE3NGM1NiIsIm5iZiI6MTczODY3NDU5OS43ODksInN1YiI6IjY3YTIxMWE3YTc0ZDhlZTIzYjI2YjljYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.52ywS72DOqmrwt1wFjZBOtZKKxOGXEIlXLNd9cDUZK0",
    },
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (cardsRef.current) {
        event.preventDefault();
        cardsRef.current.scrollBy({
          left: event.deltaY > 0 ? 100 : -100,
          behavior: "smooth",
        });
      }
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    const cardContainer = cardsRef.current;
    if (cardContainer) {
      cardContainer.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (cardContainer) {
        cardContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <>
      <h2>{title}</h2>
      <div className="titleCards cardList" ref={cardsRef}>
        {apiData.map((movie) => (
          <Link to={`/player/${movie.id}`} key={movie.id} className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
              alt={movie.original_title}
            />
            <p>{movie.original_title}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TitleCards;

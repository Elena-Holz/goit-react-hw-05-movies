import { useState, useEffect } from "react";
import { getTrendingMovies } from 'components/services/api';
import GalleryMovies from "components/Gallery/GalleryMovies/GalleryMovies";
import css from "components/Pages/Home/Home.module.css";

export default function Home() {
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);

useEffect(() => {
    const fetchTrendingMovies = async () => {
      
        try {
            const data = await getTrendingMovies(page);
            const trendMovies = data.results;
            console.log('trendMovies', trendMovies);
            setMovies((movies) => [...movies, ...trendMovies]);
        
        } catch (error) {
            setError(error);
      
        }
    }
     fetchTrendingMovies();
    
}, [page]);
      
  return (
      <>
          <h2 className={css.homeTitle}>Trending movies</h2>
          <GalleryMovies movies={movies}/>
            {error && <p> Sorry</p>}
    </>
  )
}
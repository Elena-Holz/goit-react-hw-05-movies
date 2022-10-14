import { useState, useEffect } from "react";
import { getTrendingMovies } from 'components/services/api';
import GalleryMovies from "components/Gallery/GalleryMovies/GalleryMovies";
import css from "Pages/Home/Home.module.css";
import Button from 'components/Button/Button.jsx';
import PropTypes from 'prop-types';

export default function Home() {
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);

useEffect(() => {
    const fetchTrendingMovies = async () => {
      
        try {
            const data = await getTrendingMovies(page);
            const trendMovies = data.results;
            setMovies((movies) => [...movies, ...trendMovies]);
        
        } catch (error) {
            setError(error);
      
        }
    }
     fetchTrendingMovies();
    
}, [page]);
    
    const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  }
      
  return (
      <>
          <h2 className={css.homeTitle}>Trending movies</h2>
          <GalleryMovies movies={movies} />
         <Button loadMore={loadMore} text='Load more' />
            {error && <p> Sorry</p>}
    </>
  )
};

Home.propTypes = {
    error: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    movies: PropTypes.array.isRequired,
    loadMore: PropTypes.func.isRequired,
  
}

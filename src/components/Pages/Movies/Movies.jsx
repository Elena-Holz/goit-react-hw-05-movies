import Searchbar from 'components/SearchBar/SearchBar'
// import css from 'components/Pages/Movies/Movies.module.css'
import GalleryMovies from 'components/Gallery/GalleryMovies/GalleryMovies';
import { useState, useEffect } from 'react';
import { getMovies } from 'components/services/api';
import { useSearchParams} from "react-router-dom";
// import { useMemo } from 'react';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    // const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);


 const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("searchQuery");
    // const { searchQuery } = useParams();
    console.log(searchQuery);
      console.log(movies);

useEffect(() => {
    const fetchMovies = async () => {
      
        try {
            const data = await getMovies(searchQuery, page);
            const newMovies = data.results;
            console.loge(data);
            setMovies(prevmovies => [...prevmovies, ...newMovies]);
            // console.loge(movies);
        
        } catch (error) {
            setError(error);
      
        }
    }
    if (searchQuery) {
        fetchMovies();
    }
    
}, [searchQuery, page]);
      
    
    const onSearch = (search) => {
    setSearchParams({searchQuery: search});
    console.log('searchName', search);
    // setMovies([]);
    setPage(1);
  }

    return (
    <>
            <Searchbar onChange={onSearch}/>
            {error && <p>Будь ласка спробуйте ще раз...</p>}
             <GalleryMovies movies={movies}/>
    </>
    )
}




// import React, { useContext, useEffect, useState } from 'react';
// import { QueryContext } from '../../App';
// import Searchbar from '../../components/Searchbar/Searchbar';
// import MoviesThumbs from '../../pages/MovieThumbs';
// import { apiKey } from '../Home/Home';
// export default function Movies() {
//   const { state, setState } = useContext(QueryContext);
//   console.log('Movies', state);
//   const [moviesSearch, setMoviesSearch] = useState([]);

//   const handleFetch = value => {
//     if (value.trim(' ').length > 0) {
//       fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${value}&page=1&include_adult=false`
//       )
//         .then(response => response.json())
//         .then(data => {
//           setMoviesSearch(data.results || []);
//         });
//     }
//   };
//   return (
//     <div>
//       <Searchbar submitHandler={handleFetch} />
//       <MoviesThumbs moviesSearch={moviesSearch} />
//     </div>
//   );
// }
import Searchbar from 'components/SearchBar/SearchBar'
import GalleryMovies from 'components/Gallery/GalleryMovies/GalleryMovies';
import { useState, useEffect } from 'react';
// import { getMovies } from 'components/services/api';
import { useSearchParams} from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';

export default function Movies() {
    const [movies, setMovies] = useState([]);

 const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("searchQuery");
    console.log(searchQuery);
    const request = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    if (request === '') {
      return;
    }
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `  https://api.themoviedb.org/3/search/movie?api_key=d7ec2f16e9f47b0d4f9bd29e024a97c3&page=1&query=${request}`
        );
          setMovies(response.data.results);
          console.log(response);
     
      } catch (error) {
            console.log(error);

      }
    };

    fetchMovies();
  }, [request]);
      
    
    const onSearch = (search) => {
    setSearchParams({searchQuery: search});
    console.log('searchName', search);
    setMovies([]);
  }

    return (
    <>
            <Searchbar onChange={onSearch}/>
             <GalleryMovies movies={movies}/>
    </>
    )
}

Movies.propTypes = {
    movies: PropTypes.array,
    searchQuery: PropTypes.string,
    request: PropTypes.string,
    onSearch: PropTypes.func,
}
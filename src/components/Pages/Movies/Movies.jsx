import Searchbar from 'components/SearchBar/SearchBar'
// import css from 'components/Pages/Movies/Movies.module.css'
import GalleryMovies from 'components/Gallery/GalleryMovies/GalleryMovies';
import { useState, useEffect } from 'react';
import { getMovies } from 'components/services/api';
import {useSearchParams} from "react-router-dom";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);


 const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("searchQuery");
    console.log(searchQuery);

useEffect(() => {
    const fetchMovies = async () => {
      
        try {
            const data = await getMovies(searchQuery);
            const newMovies = data.results;
            console.loge(data);

            setMovies((movies) => [...movies, ...newMovies]);
            console.loge(newMovies);
        
        } catch (error) {
            setError(error);
      
        }
    }
    if (searchQuery) {
        fetchMovies();
    }
    
}, [searchQuery]);
      
    
const onSearch = (search) => {
    setSearchParams({searchQuery: search});
    console.log('searchName', search);
    setMovies([]);
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





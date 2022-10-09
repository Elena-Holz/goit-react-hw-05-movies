


import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getMoviesCast} from 'components/services/api';
// import css from "components/Pages/MovieDetails/MovieDetails.module.css"




export default function Cast() {
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    console.log(movieId);

    useEffect(() => {
    const fetchMoviesCast = async () => {

        try {
            
        setError(null)
        const cast = await getMoviesCast(movieId);
        console.loge(cast);
                  
        } catch (error) {
            setError(error);
        }
    }
        fetchMoviesCast();
    }, [movieId]);

   
 
    return (
      <>
         <h2 >Actors</h2>
            {error && <p> Sorry</p>}
    
      </>
    
  );
};




import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getMoviesReviews} from 'components/services/api';
// import css from "components/Pages/MovieDetails/MovieDetails.module.css"




export default function Cast() {
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    console.log(movieId);

    useEffect(() => {
    const fetchMoviesReviews = async () => {

        try {
            
        setError(null)
        const cast = await getMoviesReviews(movieId);
        console.loge(cast);
                  
        } catch (error) {
            setError(error);
        }
    }
        fetchMoviesReviews();
    }, [movieId]);

   
 
    return (
      <>
         <h2 >Reviews</h2>
            {error && <p> Sorry</p>}
    
      </>
    
  );
};

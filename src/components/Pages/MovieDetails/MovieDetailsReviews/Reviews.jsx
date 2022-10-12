


import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getMoviesReviews} from 'components/services/api';
import css from "components/Pages/MovieDetails/MovieDetails.module.css"




export default function Cast() {
    const [error, setError] = useState(null);
     const [state, setState] = useState(null);
    const { movieId } = useParams();
    console.log(movieId);

    useEffect(() => {
    const fetchMoviesReviews = async () => {

        try {
            
        setError(null)
            const data = await getMoviesReviews(movieId);
            setState(data);
            console.loge(data);
                  
        } catch (error) {
            setError(error);
        }
    }
        fetchMoviesReviews();
    }, [movieId]);

   
 
    return (
      <>
            <h2 >Reviews</h2>
            {/* {state.results.map(({ author, content }) => (
       
            <ul>
                <li key={movieId}>
                    <p className={css.author}>Author:{author}</p>
                    <p className={css.content}>{content}</p>   
                </li>
                </ul>
            ))} */}
            
            {error && <p> Sorry</p>}
    
      </>
    
  );
};





{/* GalleryMovies.defaultProps = {
    movies: []
} */}
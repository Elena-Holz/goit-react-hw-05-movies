


import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getMoviesCast} from 'components/services/api';
// import css from "components/Pages/MovieDetails/MovieDetails.module.css"




export default function Cast() {
    const [error, setError] = useState(null);
     const [state, setState] = useState(null);
    const { movieId } = useParams();
    console.log(movieId);

    useEffect(() => {
    const fetchMoviesCast = async () => {

        try {
            
        setError(null)
            const acthors = await getMoviesCast(movieId);
            setState(acthors);
        console.loge(state);
                  
        } catch (error) {
            setError(error);
        }
    }
        fetchMoviesCast();
    }, [movieId]);

   
 
    return (
      <>
            <h2 >Actors</h2>
            {/* <ul>
            {state.cast.map(({ name, profile_path, id }) => (
       
            
                <li key={id}>
                    <p>{name}</p>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w200${profile_path}`}  alt='' />
                    </div>  
                </li>
                
            ))}
                </ul> */}
            {error && <p> Sorry</p>} 
    
      </>
    
  );
};

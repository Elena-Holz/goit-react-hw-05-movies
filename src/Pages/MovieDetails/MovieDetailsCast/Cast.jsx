


import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getMoviesCast} from 'components/services/api';
import css from "Pages/MovieDetails/MovieDetails.module.css"
import PropTypes from 'prop-types';

export default function Cast() {
    const [error, setError] = useState(null);
     const [state, setState] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
    const fetchMoviesCast = async () => {

        try {
            
        setError(null)
            const data = await getMoviesCast(movieId);
            setState(data.cast);
        // console.loge(acthors);
                  
        } catch (error) {
            setError(error);
        }
    }
        fetchMoviesCast();
    }, [movieId]);

    return (
      <>
            {state.length > 0 && (<ul>
                {state.map(({ name, profile_path, id }) => (
                    <li className={css.listReviews} key={id}>
                        <p className={css.title}>{name}</p>
                        <div>
                            {profile_path ? (
                                <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt='' />
                            ) : (
                                <img src={`https://ik.imagekit.io/rqegzjddo/no-poster-avalible.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661766934161}`} alt='' />    
                            )
                            }
                        </div>
                    </li>
                
                ))}
            </ul>)}
            {error && <p> Sorry</p>} 
    
      </>
    
  );
};

Cast.propTypes = {
    error: PropTypes.bool,
    movieId: PropTypes.number,
    state: PropTypes.array,
    id: PropTypes.number,
    name: PropTypes.string,
    profile_path: PropTypes.string,
}

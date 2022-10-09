import { useParams, useNavigate, Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMoviesDetails } from 'components/services/api';
import css from "components/Pages/MovieDetails/MovieDetails.module.css"




export default function MovieDetails() {

    const [state, setState] = useState(null);
        const [error, setError] = useState(null);
    const { movieId } = useParams();
    const navigate = useNavigate();
    console.log(movieId);

    

    useEffect(() => {
    const fetchMoviesID = async () => {

        try {
            
          setError(null)
            const movieInfo = await getMoviesDetails(movieId);
            setState(movieInfo);
            console.loge(state);
                  
        } catch (error) {
            setError(error);
        }
    }
        fetchMoviesID();
    }, [movieId]);

    const goBack = () => navigate("/");
 
    return (
      <>
          <button className={css.backBtn} onClick={goBack}> Go back</button>
          {state &&
              <div>
                  <h2>Movie: </h2>
                  <p>
                      about movie
                    </p>
                        <div className={css.boxBtn}>
                        <button className={css.detaliesBtn}>
                            <NavLink to={'cast'}>Cast</NavLink>
                        </button>
                        </div>
                        <div className={css.boxBtn}>
                        <button className={css.detaliesBtn}>
                            <NavLink to={'reviews'}> Reviwes</NavLink>
                        </button>
                        </div>
                </div>
          }
            {error && <p> Sorry</p>}
     <Outlet />
      </>
    
  );
};

   /* <img src="https://via.placeholder.com/960x240" alt="" /> */

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
            const arr = movieInfo.genres;
            const genres = [];
            for (const genre of arr) {
            genres.push(genre.name);
                }
            console.log(genres);
            // console.log(state.poster_path);
                  
        } catch (error) {
            setError(error);
        }
    }
        fetchMoviesID();
    }, [movieId]);

    const goBack = () => navigate(-1);
 
    return (
      <>
          <button className={css.backBtn} onClick={goBack}> Go back</button>
          {state &&
                <div >
                    <div className={css.detaliesContener}>
                        <div className={css.detalies}>
                        <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} className={css.detaliesImg} alt='' />
                        </div>
                        <div className={css.detalies}>
                            <h2 className={css.detaliesTitle}>{state.title}</h2>
                            <h3 className={css.title}>Overview</h3>
                            <p className={css.overview}>{state.overview}</p>
                            <h3 className={css.title}>Genres</h3>
                            <p className={css.overview}>{state.genres.map(genre => genre.name).join(' ')}</p>
                        </div>
                    </div>
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

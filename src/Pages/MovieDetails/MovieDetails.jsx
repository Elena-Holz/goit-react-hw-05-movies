import { useParams, useNavigate, Outlet, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMoviesDetails } from 'components/services/api';
import css from "Pages/MovieDetails/MovieDetails.module.css"
import PropTypes from 'prop-types';

export default function MovieDetails() {

    const [state, setState] = useState(null);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/movies";
    console.log(movieId);

    useEffect(() => {
    const fetchMoviesID = async () => {

        try {
            
            setError(null)
            const movieInfo = await getMoviesDetails(movieId);
            setState(movieInfo);
                  
        } catch (error) {
            setError(error);
        }
    }
        fetchMoviesID();
    }, [movieId]);

    const goBack = () => navigate(from);
 
    return (
      <>
          <button className={css.backBtn} onClick={goBack}> Go back</button>
          {state &&
                <div >
                    <div className={css.detaliesContener}>
                        <div className={css.detaliesImg}>
                        <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} className={css.detaliesImg} alt='' />
                        </div>
                        <div className={css.detalies}>
                            <h2 className={css.detaliesTitle}>{state.title}</h2>
                            <p className={css.overview}>User Score: {state.vote_count}%</p>
                            <h3 className={css.title}>Overview</h3>
                            <p className={css.overview}>{state.overview}</p>
                            <h3 className={css.title}>Genres</h3>
                            <p className={css.overview}>{state.genres.map(genre => genre.name).join(' ')}</p>
                        </div>
                    </div>
                        <p className={css.titleInfo}>Additional information</p>
                        <div className={css.boxBtnCast}>
                        <button className={css.detaliesBtn}>
                            <NavLink state={{from}} to={'cast'}>Cast</NavLink>
                        </button>
                        </div>
                        <div className={css.boxBtnReviwes}>
                        <button className={css.detaliesBtn}>
                            <NavLink state={{from}} to={'reviews'}> Reviwes</NavLink>
                        </button>
                        </div>
                </div>
          }
            {error && <p> Sorry</p>}
     <Outlet />
      </>
    
  );
};

MovieDetails.propTypes = {
    error: PropTypes.bool.isRequired,
    movieId: PropTypes.number.isRequired,
    state: PropTypes.object.isRequired,
    goBack: PropTypes.func.isRequired,
}

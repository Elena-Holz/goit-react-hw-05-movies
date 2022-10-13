// import GalleryItem from "../GalleryItems/GalleryItems";
import { Link, useLocation } from "react-router-dom";
import css from "components/Gallery/GalleryMovies/GalleryMovies.module.css";
import PropTypes from 'prop-types';

function GalleryMovies({ movies }) {
    const location = useLocation();
    console.log('location in detalies', location);
    const elements = movies.map(({ id, title }) => {
        return <li className={css.listGallery} key={id}>
                    <Link  state={{from: location}} className={css.moviesTitle} to={`/movies/${id}`}>{title}</Link>
                </li>
    })
    return (
        <ul>{elements}</ul>
    )
}

export default GalleryMovies

GalleryMovies.defaultProps = {
    movies: []
}

GalleryMovies.propTypes = {
    movies: PropTypes.array,
    id: PropTypes.number,
    title: PropTypes.number,
   
  
}

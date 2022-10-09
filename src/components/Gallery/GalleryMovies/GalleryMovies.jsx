// import GalleryItem from "../GalleryItems/GalleryItems";
import { Link } from "react-router-dom";
import css from "components/Gallery/GalleryMovies/GalleryMovies.module.css";


function GalleryMovies({ movies }) {
    const elements = movies.map(({ id, title }) => {
        return <li key={id}>
                    <Link className={css.moviesTitle} to={`/movies/${id}`}>{title}</Link>
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
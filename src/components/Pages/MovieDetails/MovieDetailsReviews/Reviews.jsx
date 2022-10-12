


import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getMoviesReviews} from 'components/services/api';
import css from "components/Pages/MovieDetails/MovieDetails.module.css"




export default function Cast() {
    const [error, setError] = useState(null);
    const [state, setState] = useState([]);
    const { movieId } = useParams();
    console.log(movieId);

    useEffect(() => {
        const fetchMoviesReviews = async () => {

            try {
            
                setError(null)
                const data = await getMoviesReviews(movieId);
                setState(data.results);
                console.loge(data);
                  
            } catch (error) {
                setError(error);
            }
        }
        fetchMoviesReviews();
    }, [movieId]);

    const elements = state.map(({ author, content, id }) => {
            
        return (
            <li key={id}>
                <h3 className={css.author}>Author:{author}</h3>
                <p className={css.content}>{content}</p>
            </li>
        )
    });   
 
    return (
    <>
        {/* <h2 >Reviews</h2> */}
            {state.length > 0 ? (
                <ul className={css.listReviews}>{elements}</ul>
            ) : (
                <p>Sorry!There are no comments for this movie yet</p>
            )}       
        {error && <p> Sorry</p>}
    </>
    
  );
};

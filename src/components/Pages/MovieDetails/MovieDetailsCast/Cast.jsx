


import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getMoviesCast} from 'components/services/api';
import css from "components/Pages/MovieDetails/MovieDetails.module.css"




export default function Cast() {
    const [error, setError] = useState(null);
     const [state, setState] = useState([]);
    const { movieId } = useParams();
    console.log(movieId);

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

//     const elements = state.map(({ name, profile_path, id }) => {
            
//         return (
                
//             <li key={id}>
//                 <p>{name}</p>
//                 <div>
//                     <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
//                 </div>
//             </li>
                
//         )
//     });
        
//     return (
//     <>
        
//             {state.length > 0 && (
//                 <ul className={css.listReviews}>{elements}</ul>
//             )}       
//         {error && <p> Sorry</p>}
//     </>
    
//   );
// };

 


    return (
      <>
            <h2 >Cast</h2>
            {state.length > 0 && (<ul>
                {state.map(({ name, profile_path, id }) => (
                    <li className={css.listReviews} key={id}>
                        <p>{name}</p>
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


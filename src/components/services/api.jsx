import axios from "axios";


export const getTrendingMovies = async (page = 1) => {
    const {data} = await  axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=d7ec2f16e9f47b0d4f9bd29e024a97c3&page=${page}`)
    return data;
}


export const getMovies = async (page = 1, search) => {
    const {data} = await  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d7ec2f16e9f47b0d4f9bd29e024a97c3&query=${search}&page=${page}&language=en-US&include_adult=false`)
    console.log(data);
     console.log(data.results);
    return data;
}


export async function getMoviesDetails(movieid) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieid}?api_key=d7ec2f16e9f47b0d4f9bd29e024a97c3&language=en-US&append_to_response=videos`
      );
       console.log(data.overview);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMoviesCast(movieid) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=d7ec2f16e9f47b0d4f9bd29e024a97c3&language=en-US&append_to_response=videos`
      );
       console.log(data.cast);
    return data;
  } catch (error) {
    console.log(error);
  }
}


// export const getMoviesReviews = async () => {
//     const {data} = await  axios.get(`https://api.themoviedb.org/3/movies/get - movie - reviews?api_key=d7ec2f16e9f47b0d4f9bd29e024a97c3`)
//     console.log(data);
    
//     return data;
// }


export async function getMoviesReviews(movieid) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=d7ec2f16e9f47b0d4f9bd29e024a97c3&language=en-US&append_to_response=videos`
      );
       console.log(data.results.content);
    return data;
  } catch (error) {
    console.log(error);
  }
}
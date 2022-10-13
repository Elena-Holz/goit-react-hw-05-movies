import axios from "axios";


export const getTrendingMovies = async (page = 1) => {
    const {data} = await  axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=d7ec2f16e9f47b0d4f9bd29e024a97c3&page=${page}`)
    return data;
}


// export const getMovies = async (page = 1, search) => {
//     const {data} = await  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d7ec2f16e9f47b0d4f9bd29e024a97c3&query=${search}&page=${page}&include_adult=false`)
//     console.log(data);
//      console.log(data.results);
//     return data;
// }

export async function getMovies(search) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=d7ec2f16e9f47b0d4f9bd29e024a97c3&query=${search}&page=1&include_adult=false`
    );
    console.log(search);
      console.log(data.results);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMoviesDetails(movieid) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieid}?api_key=d7ec2f16e9f47b0d4f9bd29e024a97c3&language=en-US&append_to_response=videos`
      );
      const arr = data.genres;
      console.log(arr);
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
      const cast = data.cast;
       console.log(cast);
    return data;
  } catch (error) {
    console.log(error);
  }
}


export async function getMoviesReviews(movieid) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=d7ec2f16e9f47b0d4f9bd29e024a97c3&language=en-US&append_to_response=videos`
      );
    
      const resul = data.results;
      console.log(resul);

    return data;
  } catch (error) {
    console.log(error);
  }
}
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Movies from "./Pages/Movies/Movies.jsx";
import MovieDetails from "./Pages/MovieDetails/MovieDetails.jsx";
import Cast from "./Pages/MovieDetails/MovieDetailsCast/Cast.jsx";
import Reviews from "components/Pages/MovieDetails/MovieDetailsReviews/Reviews.jsx";
import NavMenu from "./NavMenu/NavMenu.jsx";


function App() {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews"  element={<Reviews />}/>
          </Route>
        <Route path="*" element={<Home />} />
      
     </Routes>
    </div>
  );
};

export default App;
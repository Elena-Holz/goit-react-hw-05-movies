import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import Home from "./Pages/Home/Home.jsx";
// import Movies from "./Pages/Movies/Movies.jsx";
// import MovieDetails from "./Pages/MovieDetails/MovieDetails.jsx";
// import Cast from "./Pages/MovieDetails/MovieDetailsCast/Cast.jsx";
// import Reviews from "components/Pages/MovieDetails/MovieDetailsReviews/Reviews.jsx";
// import NavMenu from "./NavMenu/NavMenu.jsx";
// import SharedLayout from "./SharedLayout/SharedLayout.jsx";

const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const Movies = lazy(() => import("./Pages/Movies/Movies.jsx"));
const MovieDetails = lazy(() => import("./Pages/MovieDetails/MovieDetails.jsx"));
const Cast = lazy(() => import("./Pages/MovieDetails/MovieDetailsCast/Cast.jsx"));
const Reviews = lazy(() => import("./Pages/MovieDetails/MovieDetailsReviews/Reviews.jsx"));
const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout.jsx"));


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

          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />}/>
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:movieId" element={<MovieDetails />}>
                  <Route path="reviews" element={<Reviews />} />
                  <Route path="cast" element={<Cast />} />
                </Route>
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
    </div>
  );
};

export default App;
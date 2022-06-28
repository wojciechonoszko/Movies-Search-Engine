import Spinner from 'components/Spinner/Spinner';
import Navigations from './Layout/Layout';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MovieDetail = lazy(() => import('../pages/MoviesPage/MovieDetail'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const Movies = lazy(() => import('../pages/Movies/SearchMovies'));





export const App = () => {
  return (
    <>
      <Navigations />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="movies" exact element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetail />}>
            <Route
            path="movies/:moviesId/reviews"
            element={<Reviews />}
            ></Route>
            <Route path="movies/:moviesId/cast" element={<Cast />}></Route>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>

    </>
  );
};

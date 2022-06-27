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
      

    </>
  );
};

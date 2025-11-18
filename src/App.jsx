

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from '../DefaultLayout/DefaultLayout';

import HomePage from '../PagesOutlet/HomePage';
import MovieList from '../PagesOutlet/MovieList';
import MovieDetails from '../PagesOutlet/MovieDetails';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<DefaultLayout />}>

          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MovieList />} />
          <Route path='/movies/:id' element={<MovieDetails />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}





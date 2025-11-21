import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from '../DefaultLayout/DefaultLayout';

import HomePage from '../PagesOutlet/HomePage';
import MovieList from '../PagesOutlet/MovieList';
import MovieDetails from '../PagesOutlet/MovieDetails';
import ErrorPage from "../PagesOutlet/ErrorPage";


export default function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<DefaultLayout />}>

          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MovieList />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
          <Route path="*" element={<ErrorPage/>}/>  {/*Se l’utente prova a entrare in una rotta che NON esiste, allora mostra ErrorPage.*/}

        </Route>

      </Routes>
    </BrowserRouter>
  );
}





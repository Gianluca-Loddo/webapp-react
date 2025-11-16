

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from '../DefaultLayout/DefaultLayout';

import HomePage from '../PagesOutlet/HomePage';
import MovieList from '../PagesOutlet/MovieList';
import MovieDetails from '../PagesOutlet/MovieDetails';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route Component={DefaultLayout}>
          
          <Route path='/' Component={HomePage} />
          <Route path='/movies' Component={MovieList} />
          <Route path='/movies/:id' Component={MovieDetails} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}





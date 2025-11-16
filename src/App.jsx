
import axios from 'axios';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from '../DefaultLayout/DefaultLayout';

import HomePage from '../Pages/HomePage';
import MovieList from '../Pages/MovieList';
import MovieDetails from '../Pages/MovieDetails';


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





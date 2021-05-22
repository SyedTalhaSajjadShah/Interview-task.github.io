import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Navigation';
import Cards from './Cards';
import  Progressbar from './Progressbar';
import Tutorial from "./Tutorial";
import Quizchapter from './Quizchapter';
import './App.css';
import Result from './Result';

const App = () => {
      return (
            <>
           <Navigation />
           <Cards />
           <Progressbar />
           <Tutorial/>
           <Quizchapter/>
           <Result/>
            </>
      );
};

export default App;
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Soups from './Soups/Soups';
import Pies from './Pies/Pies';
import Beverages from './Beverages/Beverages';
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>


    <Routes>
      <Route path="/" element={ <Main/> }/>
      <Route path="/soups" element={ <Soups/> }/>
      <Route path="/pies" element={ <Pies/> }/>
      <Route path="/beverages" element={ <Beverages/> }/>
      
    </Routes>
    </>
  );
}

export default App;

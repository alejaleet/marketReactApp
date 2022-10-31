import logo from './logo.svg';
import './App.css';
import ListCard from './component/ListCard/ListCard';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Router from './component/Router';
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header/>
        <Router/>
      <Footer/>
    </div>
  );
}

export default App;

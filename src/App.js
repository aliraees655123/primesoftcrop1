import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import TakeAMoment from './Components/TakeAMoment/TakeAMoment';
import OurServices from './Components/OurServices/OurServices';
import OurProcess from './Components/OurProcess/OurProcess';
import ProjectIdea from './Components/ProjectIdea/ProjectIdea';
import Footer from './Components/Footer/Footer';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
    
    </Routes>
  </BrowserRouter>
    {/* <Header/>
    <HeaderComponent/>
    <TakeAMoment/>
    <OurServices/>
    <OurProcess/>   
    <ProjectIdea/>
    <Footer/> */}
    
     
    </>
  );
}

export default App;

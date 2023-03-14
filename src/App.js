import './App.css';
import{Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Project';
import Services from './Components/Services';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

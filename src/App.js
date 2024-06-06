
import './App.css';
import './stars.scss';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';



import Navbar from './components/navbar';

function App() {
  

  return (
    
    <div className="overflow-hidden">

      <Navbar/>
      <Routes>
        <Route>
          
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Route>
      </Routes>
  
      
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;

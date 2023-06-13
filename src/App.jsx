import './style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import FooterSection from './components/FooterSection/FooterSection';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Pages from './pages/Pages';
import Blogs from './pages/Blogs';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/Pages" element={<Pages />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Blogs" element={<Blogs />} />
          </Routes>
        <FooterSection />
      </Router>
    </div>
  );

}

export default App;

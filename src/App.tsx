import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Section1 from './Section1';
import Section2 from './Section2';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section1" element={<Section1 />} />
          <Route path="/section2" element={<Section2 />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

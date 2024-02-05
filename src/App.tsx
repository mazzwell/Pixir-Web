import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Section1 from './airdrop';
import Section2 from './stake';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/airdrop" element={<Section1 />} />
          <Route path="/stake" element={<Section2 />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;

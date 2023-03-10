import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={
          <><Header/>
          <Checkout />
          </>} />
          <Route path="/login" element={<h1>Login page</h1>} />
          <Route path="/" element={
            <><Header/>
            <Home /></>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

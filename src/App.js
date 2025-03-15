import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Products from "./Products";
import Consulting from "./Consulting";
import SocialN from "./SocialN";
import OnlineV from "./OnlineV";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function App() {
  return (
    <Router>
    <div className="App">
      <div className='App-header1'>
    <h3>پلتفرم مراقبتی سرطان کن وایز</h3>
        <nav>
          <ul>
          <li><Link to="/login">ورود</Link></li>
          <li><Link to="/register">ثبت‌نام</Link></li>
          <li><Link to="/about">درباره ما</Link></li>
          <li><Link to="/products">معرفی محصولات</Link></li>
          <li><Link to="/services">خدمات</Link></li>
          <li><Link to="/home">صفحه اصلی</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/onlineV" element={<OnlineV />} />
          <Route path="/socialN" element={<SocialN />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link"  href="https://reactjs.org"   target="_blank"   rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
    </Router>
  );
}

export default App;

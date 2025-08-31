import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './components/service';
import AboutUs from './components/aboutUs';
import PricingPage from './components/pricingPage';
import BlogPage from './components/blogPage';
import Pricing from './components/pricing';
import Blog from './components/blog';
import Header from './components/header';
import Footer from './components/footer';
import ServicePage from './components/servicePage';
import LoginPage from './components/loginPage';
import Register from './components/register';
import Cart from './components/cart';
import Contact from './components/contact';
import AboutPage from './components/aboutPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutUs' element={<AboutUs />}></Route>
          <Route path='/aboutPage' element={<AboutPage/>}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/servicePage' element={<ServicePage/>}></Route>
          <Route path='/pricingPage' element={<PricingPage />}></Route>
          <Route path='/loginPage' element={<LoginPage />}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/blogPage' element={<BlogPage />}></Route>
          

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import CoursesPage from './components/CoursesPage/CoursesPage';
import ContactUs from './components/contactUs/ContactUs';
import AboutUs from './components/aboutUs/AboutUs';
import CoursesDetails from './components/coursesDetails/CoursesDetails'
import ShopCart from "./components/shopCart/ShopCart"

//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextPtovider from './context/CartContextProvider'

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextPtovider>
          <Navbar/>
          <Routes>
            <Route path='/courses/:name' element={<CoursesDetails />}/>
            <Route path='/cart' element={<ShopCart/>}/>
            <Route path='/courses' element={<CoursesPage/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/' element={<MainPage/>}/>
          </Routes>
          <Footer/>
        </CartContextPtovider>
      </ProductContextProvider>
    </div>
  );
}

export default App;

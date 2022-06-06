import React from 'react';
import './lib/bootstrap/dist/css/bootstrap.min.css';
import './lib/bootstrap-icons/bootstrap-icons.css';
import './lib/boxicons/css/boxicons.min.css';
import './lib/glightbox/css/glightbox.min.css';
import './lib/swiper/swiper-bundle.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/Layout.jsx/Layout';
import Footer from './pages/Layout.jsx/Footer';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Support from './pages/Support/Support';
import Xena from './pages/Xena/Xena';
import Contact from './pages/Contact/Contact';
import Franchise from './pages/Franchise/Franchise';
const App = () => {
  return (
    <BrowserRouter>
     <Layout/>
        <Routes>
           <Route path='/'></Route>
            <Route index element={<Home/>}></Route>
            <Route path="AnaSayfa" element={<Home/>}></Route>
            <Route path="Hakkımızda" element={<About/>}></Route>
            <Route path="Destek" element={<Support/>}></Route>
            <Route path="Xena" element={<Xena/>}></Route>
            <Route path="iletisim" element={<Contact/>}></Route>
            <Route path="BayiBasvuru" element={<Franchise/>}></Route>
       </Routes>
      
       
       <Footer />
       
     </BrowserRouter>
  );
}

export default App;
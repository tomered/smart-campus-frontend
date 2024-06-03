
// delete comment

import './App.css';
import WaterPage from './components/screens/WaterPage.js';
import ContactUs from './components/screens/ContactPage.js';
import Staff from './components/screens/StaffPage.js';
import Students from './components/screens/StudentsPage.js';
import Header from './components/MainHeader.js';
import Footer from './components/Footer.js';
import MainPage from './components/screens/MainPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/water" element={<WaterPage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/staff" element={<Staff />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

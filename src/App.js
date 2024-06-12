// delete comment

import './App.css';
import WaterPage from './components/screens/learnMorePage/WaterPage.js';
import MicroClimaticPage from './components/screens/learnMorePage/MicroClimaticPage.js';
import AirPage from './components/screens/learnMorePage/AirPage.js';
import RecyclingPage from './components/screens/learnMorePage/RecyclingPage.js';
import CleanlinessPage from './components/screens/learnMorePage/CleanlinessPage.js';
import PowerPage from './components/screens/learnMorePage/PowerPage.js';
import ContactUs from './components/screens/ContactPage.js';
import Staff from './components/screens/StaffPage.js';
import Students from './components/screens/StudentsPage.js';
import NewsPage from './components/screens/NewsPage.js';
import Header from './components/MainHeader.js';
import Footer from './components/Footer.js';
import MainPage from './components/screens/MainPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/power' element={<PowerPage />} />
          <Route path='/air' element={<AirPage />} />
          <Route path='/water' element={<WaterPage />} />
          <Route
            path='/RecyclingGarbageEfficiency'
            element={<RecyclingPage />}
          />
          <Route path='/microClimatic' element={<MicroClimaticPage />} />
          <Route path='/cleanliness' element={<CleanlinessPage />} />
          <Route path='/students' element={<Students />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/news' element={<NewsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

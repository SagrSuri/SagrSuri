// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './NotFound';
import Skills from './Components/Skills/Skills';
import Certificates from './Components/Certificates/Certificates';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Profile from './Components/Profile/Profile';
import Loader from './Components/Loader/Loader';
import ProgressBar from './Components/ProgressBar/ProgressBar'; // Import the ProgressBar component
import { Toaster } from 'react-hot-toast';
import Meta from './Components/Meta/Meta'; // Import the Meta component

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // To get the current route

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust timeout as needed

    return () => clearTimeout(timer);
  }, []);

  // Determine the current page based on the route
  const getPageName = () => {
    switch (location.pathname) {
      case '/':
        return 'home';
      case '/profile':
        return 'profile';
      case '/skills':
        return 'skills';
      case '/projects':
        return 'projects';
      case '/certificates':
        return 'certificates';
      case '/contact':
        return 'contact';
      default:
        return 'home'; // Default to home or notFound if route is not matched
    }
  };

  return (
    <div className='dark:bg-slate-950 text-black dark:text-white bg-slate-50'>
      <Meta page={getPageName()} /> {/* Set meta tags based on current page */}
      <ProgressBar /> {/* Add ProgressBar component */}
      <Toaster/>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path='/SagrSuri/*' element={<NotFound />} />
          <Route path='/SagrSuri/' element={<Home />} />
          <Route path='/SagrSuri/profile' element={<Profile />} />
          <Route path='/SagrSuri/skills' element={<Skills />} />
          <Route path='/SagrSuri/projects' element={<Projects />} />
          <Route path='/SagrSuri/certificates' element={<Certificates />} />
          <Route path='/SagrSuri/contact' element={<Contact />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

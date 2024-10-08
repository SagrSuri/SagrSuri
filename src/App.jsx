// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './NotFound';
import Skills from './Components/Skills/Skills';
import Blog from './Components/Blog/Blog';
import Certificates from './Components/Certificates/Certificates';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Profile from './Components/Profile/Profile';
import Loader from './Components/Loader/Loader';
import ProgressBar from './Components/ProgressBar/ProgressBar'; // Import the ProgressBar component

import Meta from './Components/Meta/Meta'; // Import the Meta component
import BlogDetail from './Components/Blog/BlogDetail';
import Navbar from './Components/Navbar/Navbar';
import ToggleO from './OwnedComponents/ToggleO';
import CrazyArch from './Components/Loaders/CrazyArch/CrazyArch'
import Cube from './Components/Loaders/Cube/Cube'
import Hexagonal from './Components/Loaders/Hexagonal/Hexagonal';
import Rippling from './Components/Loaders/Rippling/Rippling'
import MoreProjects from './Components/MoreProjects/MoreProjects'
import GitHub from './Components/GithubProfile/Github';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import YouTubeVideo from './Components/YouTube/YouTubeVideo';
import Resume from './CV/Resume';
import GettingTODO from './Components/Blog/GettingTODO'


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
      case '/blog':
        return 'blog';
      case '/contact':
        return 'contact';
        case '/resume': // Add resume page title
        return 'resume';
      default:
        return 'home'; // Default to home or notFound if route is not matched
    }
  };


  return (
    <div className='dark:bg-gray-900 bg-gray-200 text-slate-950 dark:text-slate-50'>
      <Meta page={getPageName()} /> {/* Set meta tags based on current page */}
      <ProgressBar /> {/* Add ProgressBar component */}
      
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path='/*' element={<NotFound />} />
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certificates' element={<Certificates />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/navbar' element={<Navbar/>} />
          <Route path='/toggle' element={<ToggleO/>} />
          <Route path='/github' element={<GitHub />} />

          {/* *************LOADERS************ */}
          <Route path='/Projects/MoreProjects/Loaders/CrazyArch' element={<CrazyArch />} />
          <Route path='/Projects/MoreProjects/Loaders/Cube' element={<Cube />} />
          <Route path='/Projects/MoreProjects/Loaders/Hexagonal' element={<Hexagonal/>} />
          <Route path='/Projects/MoreProjects/Loaders/Rippling' element={<Rippling/>} />
          
          {/* **********MORE PROJECTS */}
          <Route path='/Projects/MoreProjects' element={<MoreProjects/>} />
          <Route path='/YouTube' element={<YouTubeVideo channelName="@SagrSuri" />} />
          <Route path='/Resume' element={<Resume/>} />
          <Route path='/todo' element={<GettingTODO/>} />
        </Routes>
      )}
       <ScrollToTop
        color="dark:bg-blue-800"
        hoverColor="hover:bg-blue-700"
        darkColor="dark:bg-gray-700"
        darkHoverColor="dark:hover:bg-gray-900"
        size="h-8 w-8"
        textColor="text-white"
        darkTextColor="dark:text-gray-200"
        scrollThreshold={100}
        borderRadius="rounded-full"
      />
    </div>
  );
}

export default App;

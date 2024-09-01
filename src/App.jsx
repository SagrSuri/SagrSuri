// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import NotFound from './NotFound'
import Skills from './Components/Skills/Skills'
import Certificates from './Components/Certificates/Certificates'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Profile from './Components/Profile/Profile'


function App() {

    return (
        <div className='dark:bg-slate-950 text-black dark:text-white bg-slate-50'>
            <Routes>
                <Route path='*' element={ <NotFound/> }/>
                <Route path='/' element={ <Home/> }/>
                <Route path='/profile' element={<Profile/> }/>
                <Route path='/skills' element={ <Skills/> } />
                <Route path='/projects' element={ <Projects/> } />
                <Route path='/certificates' element={ <Certificates/> } />
                <Route path='/contact' element={ <Contact/> } />
            </Routes>
        </div>
    )
}

export default App
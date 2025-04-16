import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { BrowserRouter, Link, Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import MealDetails from './components/MealDetails'
import Videos from './components/Videos'

function App() {

  const [url, setUrl] = useState('/');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640)

  const handleUrl=(link) =>{
    setUrl(link);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <BrowserRouter>
    <div className='wrapper'>
        <div className='left_section'>
              <ul>
                  <li className={url==='/' ? 'active' : ''} onClick={()=>handleUrl('/')}><Link to="/">{isMobile ? 'D' : 'Dashboard'}</Link></li>
                  <li className={url==='/videos' ? 'active' : ''}  onClick={()=>handleUrl('/videos')}><Link to="/videos">{isMobile ? 'V' : 'Videos'}</Link></li>
              </ul>
        </div>
        <div className='right_section'>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/videos" element={<Videos/>}/>
                <Route path="/meal/:id" element={<MealDetails/>}/>
              </Routes>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App

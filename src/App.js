import SiteContext from './contexts/SiteContext'
import './styles.css'
import Home from './pages/Home'
import { useRef, useState } from 'react'
import { toggleMenu } from './utils'

function App() {
  const [showLinks, setShowLinks] = useState(false)

  const homeRef = useRef()
  const aboutRef = useRef()
  const servicesRef = useRef()
  const featuredRef = useRef()
  const galleryRef = useRef()
  }

  const siteContextObject = {
    showLinks,
    setShowLinks,
    toggleMenu,
    homeRef,
    aboutRef,
    servicesRef,
    featuredRef,
    galleryRef
  }

  return (
    <SiteContext.Provider value={siteContextObject}>
      <div className='App'>
        <Home />
      </div>
    </SiteContext.Provider>
  )
}

export default App

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

  function scrollToAnchor(e) {
    e.preventDefault()
    setShowLinks(false)

    let sectionName = 'home'

    if (e.target.getAttribute('href')) {
      sectionName = e.target.getAttribute('href').slice(2)
    }

    const sectionRef = eval(`${sectionName}Ref`)

    const offsetPosition = sectionRef.current.offsetTop - 62

    window.scrollTo({
      left: 0,
      top: offsetPosition,
      behavior: 'smooth'
    })
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

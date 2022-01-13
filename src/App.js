import SiteContext from './contexts/SiteContext'
import './styles.css'
import Home from './pages/Home'
import { useState } from 'react'

function App() {
  const [showLinks, setShowLinks] = useState(false)

  const toggleMenu = () => {
    setShowLinks(!showLinks)
  }

  const siteContextObject = {
    showLinks,
    toggleMenu,
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

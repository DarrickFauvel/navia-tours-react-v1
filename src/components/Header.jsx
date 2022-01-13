import { useContext } from 'react'
import SiteContext from '../contexts/SiteContext'
import Navbar from './Navbar'

const Header = () => {
  const { homeRef } = useContext(SiteContext)

  return (
    <header id='home' ref={homeRef}>
      <Navbar />

      {/* <!-- hero START --> */}
      <div className='hero'>
        <div className='hero-banner'>
          <h1>continue exploring</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facere
            totam aspernatur quibusdam debitis eaque!
          </p>
          <a href='#featured' className='btn hero-btn scroll-link'>
            explore tours
          </a>
        </div>
      </div>
      {/* <!-- hero END --> */}
    </header>
  )
}

export default Header

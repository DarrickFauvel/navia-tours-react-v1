import { useContext } from 'react'
import SiteContext from '../../contexts/SiteContext'

const NavHeader = () => {
  const { toggleMenu, showLinks, setShowLinks, scrollToAnchor } =
    useContext(SiteContext)

  return (
    <div className='nav-header'>
      <a href='#home' className='scroll-link' onClick={scrollToAnchor}>
        <img
          src='/images/navia-logo.svg'
          className='nav-logo'
          alt='navia logo'
        />
      </a>
      <button
        type='button'
        className='nav-toggle'
        id='nav-toggle'
        onClick={() => toggleMenu(showLinks, setShowLinks)}>
        <i className='fas fa-bars'></i>
      </button>
    </div>
  )
}

export default NavHeader

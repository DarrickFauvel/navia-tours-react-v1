import { useContext } from 'react'
import SiteContext from '../../contexts/SiteContext'

const NavHeader = () => {
  const { toggleMenu } = useContext(SiteContext)

  return (
    <div className='nav-header'>
      <a href='#home' className='scroll-link'>
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
        onClick={toggleMenu}>
        <i className='fas fa-bars'></i>
      </button>
    </div>
  )
}

export default NavHeader

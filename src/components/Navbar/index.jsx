import NavHeader from './NavHeader'
import NavIcons from './NavIcons'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <NavHeader />
        <NavLinks />
        <NavIcons />
      </div>
    </nav>
  )
}

export default Navbar

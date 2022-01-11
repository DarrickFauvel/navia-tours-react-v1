// import Logo from '/images/navia-logo.svg'

const NavHeader = () => {
  return (
    <div className='nav-header'>
      <a href='#home' className='scroll-link'>
        <img
          src='/images/navia-logo.svg'
          className='nav-logo'
          alt='navia logo'
        />
      </a>
      <button type='button' className='nav-toggle' id='nav-toggle'>
        <i className='fas fa-bars'></i>
      </button>
    </div>
  )
}

export default NavHeader

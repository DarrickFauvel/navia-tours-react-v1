import Navbar from './Navbar'

const Header = () => {
  return (
    <header id='home'>
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

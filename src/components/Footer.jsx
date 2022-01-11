import Social from '../components/Social'
import MainNav from '../components/Nav/Main'

const FooterSection = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='section footer'>
      <MainNav linkType='footer' />

      <Social iconClass='footer-icon' />

      <p className='copyright'>
        copyright &copy; Navia Tours
        <span className='date'> {currentYear}</span>. all rights reserved.
      </p>
    </footer>
  )
}

export default FooterSection

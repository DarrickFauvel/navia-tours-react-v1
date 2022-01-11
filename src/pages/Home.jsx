import Header from '../components/Header'
import AboutSection from '../components/Section/About'
import ServicesSection from '../components/Section/Services'
import FeaturedToursSection from '../components/Section/FeaturedTours'
import ContactSection from '../components/Section/Contact'
import GallerySection from '../components/Section/Gallery'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <AboutSection />
      <ServicesSection />
      <FeaturedToursSection />
      <ContactSection />
      <GallerySection />
      <Footer />
    </>
  )
}

export default Home

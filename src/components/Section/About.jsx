// import Photo from '../../images/photos/rowan-heuvel-U6t80TWJ1DM-unsplash.jpg'

const AboutSection = () => {
  return (
    <section className='section' id='about'>
      {/* <!-- section-title START --> */}
      <div className='section-title'>
        <h2>
          about <span>us</span>
        </h2>
      </div>
      {/* <!-- section-title END --> */}

      <div className='section-center about-center'>
        {/* <!-- about img wrapper --> */}
        <article className='about-img'>
          <img
            src='/images/photos/rowan-heuvel-U6t80TWJ1DM-unsplash.jpg'
            className='about-photo'
            alt='awesome beach'
          />
        </article>

        {/* <!-- about info --> */}
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            nesciunt adipisci ducimus placeat iste repellat distinctio magnam
            explicabo assumenda animi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            nesciunt adipisci ducimus placeat iste repellat distinctio magnam
            explicabo assumenda animi.
          </p>
          <a href='##' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  )
}

export default AboutSection

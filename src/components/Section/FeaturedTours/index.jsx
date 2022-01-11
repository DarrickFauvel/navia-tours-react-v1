import { useEffect, useState } from 'react'
import Tour from './Tour'

const FeaturedToursSection = () => {
  const [tours, setTours] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/tours.json')
      const newData = await response.json()
      setTours(newData)
    }
    fetchData()
  }, [])

  return (
    <section className='section' id='featured'>
      <div className='section-title'>
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className='featured-center'>
        <div className='section-center featured-center'>
          {tours &&
            tours
              .filter((tour) => tour.featured)
              .map(
                ({
                  id,
                  name,
                  description,
                  destination,
                  duration,
                  cost,
                  date,
                  image
                }) => (
                  <Tour
                    key={id}
                    name={name}
                    description={description}
                    destination={destination}
                    duration={duration}
                    cost={cost}
                    date={date}
                    image={image}
                  />
                )
              )}
        </div>
      </div>

      <div className='tour-btn'>
        <a href='##' className='btn'>
          all tours
        </a>
      </div>
    </section>
  )
}

export default FeaturedToursSection

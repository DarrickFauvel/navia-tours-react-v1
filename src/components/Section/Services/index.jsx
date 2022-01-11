import { useEffect, useState } from 'react'
import Service from './Service'

const ServicesSection = () => {
  const [services, setServices] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/services.json')
      const newData = await response.json()
      setServices(newData)
    }
    fetchData()
  }, [])

  return (
    <section className='section services' id='services'>
      <div className='section-title'>
        <h2>
          our <span>services</span>
        </h2>
      </div>

      <div className='section-center services-center'>
        {services &&
          services.map(({ name, description, icon, id }) => (
            <Service
              name={name}
              description={description}
              icon={icon}
              key={id}
            />
          ))}
      </div>
    </section>
  )
}

export default ServicesSection

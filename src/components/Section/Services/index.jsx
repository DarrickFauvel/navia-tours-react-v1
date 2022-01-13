import { useContext, useEffect, useState } from 'react'
import SiteContext from '../../../contexts/SiteContext'
import Service from './Service'

const ServicesSection = () => {
  const [services, setServices] = useState(null)

  const { servicesRef } = useContext(SiteContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/services.json')
      const newData = await response.json()
      setServices(newData)
    }
    fetchData()
  }, [])

  return (
    <section className='section services' id='services' ref={servicesRef}>
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

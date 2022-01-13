import { useContext, useEffect, useState } from 'react'
import SiteContext from '../../../contexts/SiteContext'
import Item from './Item'

const GallerySection = () => {
  const [gallery, setGallery] = useState(null)

  const { galleryRef } = useContext(SiteContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/tours.json')
      const newData = await response.json()
      setGallery(newData)
    }
    fetchData()
  }, [])

  return (
    <section id='gallery' ref={galleryRef}>
      <div className='gallery-center'>
        {gallery &&
          gallery.map(({ name, image, id }) => (
            <Item name={name} image={image} key={id} />
          ))}
      </div>
    </section>
  )
}

export default GallerySection

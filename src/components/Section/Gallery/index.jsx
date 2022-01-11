import { useEffect, useState } from 'react'
import Item from './Item'

const GallerySection = () => {
  const [gallery, setGallery] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/tours.json')
      const newData = await response.json()
      setGallery(newData)
    }
    fetchData()
  }, [])

  return (
    <section id='gallery'>
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

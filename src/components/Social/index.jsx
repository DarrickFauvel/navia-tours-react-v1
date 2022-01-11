import { useEffect, useState } from 'react'
import Link from './Link'

const Social = ({ iconClass }) => {
  const [socials, setSocials] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/socials.json')
      const newData = await response.json()
      setSocials(newData)
    }
    fetchData()
  }, [])

  return (
    <ul className={`${iconClass}s`}>
      {socials.map(({ name, url }, index) => (
        <li key={index}>
          <Link name={name} url={url} iconClass={iconClass} />
        </li>
      ))}
    </ul>
  )
}

export default Social

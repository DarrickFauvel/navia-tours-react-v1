import { useEffect, useState } from 'react'
import Link from './Link'

const MainNav = ({ linkType }) => {
  const [links, setLinks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/mainNavLinks.json')
      const newData = await response.json()
      setLinks(newData)
    }
    fetchData()
  }, [])

  return (
    <ul className={`${linkType}-links`} id={`${linkType}-links`}>
      {links.map(({ name, url, linkClass }, index) => (
        <li key={index}>
          <Link name={name} url={url} linkType={linkType} />
        </li>
      ))}
    </ul>
  )
}

export default MainNav

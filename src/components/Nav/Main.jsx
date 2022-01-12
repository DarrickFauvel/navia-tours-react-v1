import { useContext, useEffect, useState } from 'react'
import SiteContext from '../../contexts/SiteContext'
import Link from './Link'

const MainNav = ({ linkType }) => {
  const [links, setLinks] = useState([])

  const { showLinks } = useContext(SiteContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/mainNavLinks.json')
      const newData = await response.json()
      setLinks(newData)
    }
    fetchData()
  }, [])

  return (
    <ul
      className={`${linkType}-links ${showLinks && 'show-links'}`}
      id={`${linkType}-links`}>
      {links.map(({ name, url, linkClass }, index) => (
        <li key={index}>
          <Link name={name} url={url} linkType={linkType} />
        </li>
      ))}
    </ul>
  )
}

export default MainNav

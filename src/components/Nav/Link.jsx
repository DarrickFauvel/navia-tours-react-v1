import { useContext } from 'react'
import SiteContext from '../../contexts/SiteContext'

const Link = ({ name, url, linkType }) => {
  const { scrollToAnchor } = useContext(SiteContext)

  return (
    <a
      href={url}
      className={`${linkType}-link scroll-link`}
      onClick={scrollToAnchor}>
      {name}
    </a>
  )
}

export default Link

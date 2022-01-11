const Link = ({ name, url, linkType }) => {
  return (
    <a href={url} className={`${linkType}-link scroll-link`}>
      {name}
    </a>
  )
}

export default Link

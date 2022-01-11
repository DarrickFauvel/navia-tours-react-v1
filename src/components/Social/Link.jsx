const Link = ({ name, url, iconClass }) => {
  return (
    <a href={url} target='_blank' rel='noreferrer' className={iconClass}>
      <i className={`fab fa-${name}`}></i>
    </a>
  )
}

export default Link

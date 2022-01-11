const Item = ({ name, image }) => {
  return (
    <article className='gallery-img-container'>
      <img src={`/images/${image}`} className='gallery-img' alt={name} />
      <a href='##' className='gallery-icon'>
        <i className='fas fa-search'></i>
      </a>
    </article>
  )
}

export default Item

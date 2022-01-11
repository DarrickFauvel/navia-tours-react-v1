const Tour = ({
  id,
  name,
  description,
  destination,
  duration,
  cost,
  date,
  image
}) => {
  const currentYear = new Date().getFullYear()

  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={`/images/${image}`} className='tour-img' alt={name} />
        <p className='tour-date'>
          {date}, <span className='date'>{currentYear}</span>
        </p>
      </div>

      <div className='tour-info'>
        <h4>{name}</h4>
        <p>{description}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
              {destination}
            </span>
          </p>
          <p>{duration}</p>
          <p>from ${cost}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour

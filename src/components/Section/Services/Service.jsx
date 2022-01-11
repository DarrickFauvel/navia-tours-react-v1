const Service = ({ name, description, icon }) => {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={`fas fa-${icon} fa-fw`}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{name}</h4>
        <p className='service-text'>{description}</p>
      </div>
    </article>
  )
}

export default Service

const ContactSection = () => {
  return (
    <section className='section contact' id='contact'>
      <div className='section-center contact-center'>
        {/* <!-- contact title --> */}
        <article className='contact-title'>
          <h3>want latest tour info and updates?</h3>
          <p>Sign up for newsletter and stay up to date</p>
        </article>

        {/* <!-- contact form --> */}
        <form className='contact-form'>
          <input
            type='email'
            name='email'
            className='form-control'
            placeholder='your email'
          />
          <button type='submit' className='btn-submit'>
            submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {
      await emailjs.send(
        'service_6sew9t4',
        'template_kjzitzr',
        {
          from_name: form.name,
          to_name: 'Arvis',
          from_email: form.email,
          to_email: 'arvydas.mikalauskis@gmail.com',
          message: form.message,
        },
        'Wmvq9vTdRTAoLz021'
      )
      setLoading(false)
      alert('Message sent successfully!')
      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      setLoading(false)
      console.log(error)
      alert('An error occurred, please try again later.')
    }
  }

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="Terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container mt-12 xl:mt-24 ">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-base xl:text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your
            exsisting platform or bring a unique project to life, I'm here to
            help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5 xl:space-y-7 mt-5 xl:mt-12"
          >
            <label className="space-y-2 xl:space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="field-input"
              />
            </label>
            <label className="space-y-2 xl:space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="JohnDoe@gmail.com"
                className="field-input"
              />
            </label>
            <label className="space-y-2 xl:space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Hi, I'm interested in..."
                className="field-input"
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}{' '}
              <img
                src="/assets/arrow-up.png"
                alt="Arrow up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

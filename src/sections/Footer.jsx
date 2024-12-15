import React from 'react'

const Footer = () => {
  return (
    <section className="flex justify-between items-center flex-wrap gap-5 c-space pt-7 pb-3 border-t border-black-300">
      <div className="text-white-500">
        <p>2025.</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="Github" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img
            src="/assets/linkedin.svg"
            alt="LinkedIn"
            className="w-1/2 h-1/2"
          />
        </div>
        <div className="social-icon">
          <img
            src="/assets/instagram.svg"
            alt="Instagram"
            className="w-1/2 h-1/2"
          />
        </div>
      </div>
    </section>
  )
}

export default Footer

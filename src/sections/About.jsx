import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { useState } from 'react'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('arvydas.mikalauskis@gmail.com')

    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  return (
    <section className="my-20 c-space" id="about">
      <div className="grid grid-cols-1 gap-5 h-full xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 ">
        {/*  Grid container nr.1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid"
              className="w-full h-fit object-contain sm:h-[276px]"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Arvis</p>
              <p className="grid-subtext">
                A passionate front-end developer with a fresh perspective on
                building modern, user-friendly websites. I honed my skills in
                React, JavaScript, and responsive design. I thrive on solving
                challenges through clean, functional code and am eager to
                contribute to meaningful projects that create great user
                experiences.
              </p>
            </div>
          </div>
        </div>

        {/*  Grid container nr.2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid6.png"
              alt="grid2"
              className="w-full h-fit object-contain sm:w-[276px] mx-auto"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                My tech stack is centered around JavaScript and React, which I
                use to build dynamic and interactive web applications. I have
                experience working with TypeScript to add type safety and
                scalability to projects, and I’m currently expanding my skills
                by learning backend development with Node.js and Express
              </p>
            </div>
          </div>
        </div>

        {/*  Grid container nr.3 */}
        <div className="col-span-1 xl:row-span-4 ">
          <div className="grid-container">
            <div className="w-full flex justify-center items-center h-fit sm:h-[326px] rounded-3xl">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere={true}
                showGraticules={true}
                globeImageUrl={
                  '//unpkg.com/three-globe/example/img/earth-night.jpg'
                }
                bumpImageUrl={
                  '//unpkg.com/three-globe/example/img/earth-topology.png'
                }
                labelsData={[
                  {
                    lat: 63.4712,
                    lng: 10.9189,
                    text: 'Hello World',
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                Flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Trøndelag, Norway, and open to remote work
                worldwide or on-site opportunities within the Trøndelag region.
                I&apos;m also flexible with time zones to accommodate seamless
                communication.
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/*  Grid container nr.4 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="Grid3"
              className="w-full h-fit object-contain sm:h-[266px]"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                {' '}
                I enjoy solving challenging problems and building things through
                code. Programming isn't just my profession—it's my passion. I
                love exploring and learning new technologies, and enhancing my
                skills daily. Currently, I am exploring backend development to
                expand my skills and become a more versatile full-stack
                developer.
              </p>
            </div>
          </div>
        </div>

        {/*  Grid container nr.5 */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="Grid4"
              className="w-full h-fit object-cover sm:object-top sm:h-[276px] md:h-[126px]"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div onClick={handleCopy} className="copy-container">
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt="Copy"
                />
                <p className="text-gray_gradient text-white font-medium text-xl md:text-sm lg:text-xl ">
                  {hasCopied ? 'Copied!' : 'arvydas.mikalauskis@gmail.com'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

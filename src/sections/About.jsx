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
              <p className="grid-headtext">Hi, I'm Arvydas</p>
              <p className="grid-subtext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                adipisci consectetur consequuntur?
              </p>
            </div>
          </div>
        </div>

        {/*  Grid container nr.2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid2"
              className="w-full h-fit object-contain sm:w-[276px]"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                eligendi.
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
              <p className="grid-headtext">Lorem ipsum dolor sit.</p>
              <p className="grid-subtext">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
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
              <p className="grid-headtext">
                Lorem, ipsum dolor sit amet consectetur.
              </p>
              <p className="grid-subtext">
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, atque!
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
              <p className="grid-subtext text-center">Contact Me:</p>
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

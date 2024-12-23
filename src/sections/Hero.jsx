import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
/* import { Leva, useControls } from 'leva' */
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import {
  CanvasLoader,
  HelloWorld,
  JavaScriptLogo,
  LostProgrammer,
  ReactLogo,
  Button,
  HeroCamera,
} from '../components/components.js'

const Hero = () => {
  /*  const x = useControls('Hello world', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0,
      min: 0,
      max: 10,
    },
    rotationY: {
      value: 0,
      min: 0,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: 0,
      max: 10,
    },
    scale: {
      value: 1,
      min: 0,
      max: 10,
    },
  }) */

  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isMobile, isSmall, isTablet)

  return (
    <section className="relative min-h-screen w-full flex flex-col" id="home">
      <div className="w-full mx-auto flex flex-col mt-20 sm:mt-36 gap-3 c-space">
        <p className="text-2xl sm:text-3xl font-semibold text-sky-500 text-center font-generalsans">
          Hi, I'm Arvis <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 25]} />
            <HeroCamera isMobile={isMobile}>
              <LostProgrammer
                scale={isMobile ? [5, 5, 5] : [7, 7, 7]}
                position={isMobile ? [-1, -0.5, 1.5] : [-1, -2, 1.5]}
                rotation={[0, 1.4, 0]}
              />
            </HeroCamera>
            <group>
              <ReactLogo position={sizes.reactLogoPosition} />
              <JavaScriptLogo position={sizes.jsLogoPosition} />
              <HelloWorld position={sizes.helloWorldPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={(10, 10, 10)} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  )
}

export default Hero

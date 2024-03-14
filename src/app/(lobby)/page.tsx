import Image from 'next/image'
import Hero from '@/components/sections/hero'
import { siteConfig } from '@/config/site'

export default function IndexPage () {
  return (
    <>
      <Hero
        title={siteConfig.description}
        description='Desde instalaciones en baja tensión hasta proyectos en alta tensión, nuestro equipo altamente capacitado y comprometido se encarga de cada detalle.'
        videoSrc='/video/home-hero.mp4'
      />
      <section id='soluciones' className='pt-spacing-6'>
        <div className='container'>
          <div className='cols-container'>
            <div className='w-8-cols lg:w-7-cols'>
              <p className='f-display-3'>
                Desde la planificación hasta la ejecución, nos ocupamos de
                cada detalles para ofrecerte soluciones integrales.
              </p>
            </div>
            <div className='w-8-cols lg:w-5-cols mt-spacing-5 lg:mt-0'>
              <Image
                src='/images/home-solutions.webp'
                alt='Trabajadores dando mantenimiento a una torre de alta tensión'
                width={1280}
                height={720}
                sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                loading='lazy'
                className='w-full rounded-3xl'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

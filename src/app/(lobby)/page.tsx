import Image from 'next/image'
import Hero from '@/components/sections/hero'
import { siteConfig } from '@/config/site'
import { services } from '@/config/organization'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Icons } from '@/components/icons'

export default function IndexPage () {
  return (
    <>
      <Hero
        title={siteConfig.description}
        description='Desde instalaciones en baja tensión hasta proyectos en alta tensión, nuestro equipo altamente capacitado y comprometido se encarga de cada detalle.'
        videoSrc='/video/home-hero.mp4'
      />
      <section id='soluciones' className='pt-spacing-7'>
        <div className='container'>
          <div className='cols-container'>
            <div className='w-8-cols lg:w-7-cols'>
              <h2 className='f-subhead-2 font-medium text-muted-foreground'>
                Soluciones integrales
              </h2>
              <p className='f-display-3 mt-spacing-4'>
                Desde la planificación hasta la ejecución, nos ocupamos de
                cada detalles.
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
          <div className='cols-container mt-spacing-7 gap-y-gutter lg:gap-y-0'>
            {services.map((item, key) => (
              <Card
                key={key}
                as='article'
                className='group w-8-cols lg:w-4-cols bg-black rounded-3xl relative p-0.5'
              >
                <span className='h-8 absolute inset-x-0 top-0 overflow-hidden rounded-full'>
                  <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(180,25,25,0.6)_0%,rgba(180,25,25,0)_75%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100' />
                </span>
                <div className='w-full h-full relative z-10 bg-black/50 group-hover:bg-black/40 rounded-3xl p-gutter transition-colors duration-300'>
                  <CardContent className='grid place-content-center py-20'>
                    <Icons.Logomark className='w-auto h-36' />
                  </CardContent>
                  <CardHeader>
                    <h3 className='f-heading-3'>
                      {item.title}
                    </h3>
                    <p className='f-body-1 text-muted-foreground text-balance'>
                      {item.description}
                    </p>
                  </CardHeader>
                </div>
                <span className='absolute -bottom-0 left-[1.125rem] h-0.5 w-[calc(100%-2.25rem)] bg-gradient-to-r from-accent/0 via-accent/90 to-accent/0 transition-opacity duration-500 group-hover:opacity-60' />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

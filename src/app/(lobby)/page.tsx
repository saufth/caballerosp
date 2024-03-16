import Image from 'next/image'
import Hero from '@/components/sections/hero'
import { siteConfig } from '@/config/site'
import { services } from '@/config/organization'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { LightningBoltIcon } from '@radix-ui/react-icons'
import { CallToAction } from '@/components/call-to-action'

interface ClassName { className?: string }

const servicesIcons = [
  ({ className }: ClassName) => <Icons.Instalations className={className} />,
  ({ className }: ClassName) => <Icons.Maintenance className={className} />,
  ({ className }: ClassName) => <Icons.DesignEngineering className={className} />
]

export default function IndexPage () {
  return (
    <>
      <Hero
        title={siteConfig.description}
        description='Desde instalaciones en baja tensión hasta proyectos en alta tensión, nuestro equipo altamente capacitado y comprometido se encarga de cada detalle.'
        videoSrc='/video/home-hero.mp4'
      />
      <section id='soluciones' className='bg-dot-white/[0.2] relative flex items-center justify-center"'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        <div className='container pt-spacing-7 relative'>
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
              <div className='bg-card/40 rounded-3xl p-2 border'>
                <Image
                  src='/images/home-solutions.webp'
                  alt='Trabajadores dando mantenimiento a una torre de alta tensión'
                  width={1280}
                  height={720}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full rounded-xl'
                />
              </div>
            </div>
          </div>
          <div className='cols-container mt-spacing-6 gap-y-gutter lg:gap-y-0'>
            {services.map((item, key) => {
              const ServiceIcon = servicesIcons[key]

              return (
                <Card
                  key={key}
                  as='article'
                  className='group w-8-cols bg-card/50 hover:bg-card/70 lg:w-4-cols rounded-3xl relative xxs:py-px xxs:px-0'
                >
                  <span className='h-2 absolute inset-x-0 top-0 overflow-hidden rounded-full transition-[height] duration-300'>
                    <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(180,25,25,0.6)_0%,rgba(180,25,25,0)_75%)] opacity-50 transition-opacity duration-300 group-hover:opacity-100' />
                  </span>
                  <div className='w-full h-full relative z-10 bg-card/20 group-hover:bg-card/10 rounded-3xl p-gutter transition-colors duration-300'>
                    <CardContent className='pt-spacing-5 pb-spacing-7 relative'>
                      {ServiceIcon ? <ServiceIcon className='w-auto h-48 mx-auto fill-transparent stroke-accent stroke-[4px] relative' /> : <Icons.ImageOff className='w-auto h-48 mx-auto fill-accent' />}
                      {ServiceIcon && <ServiceIcon className='w-auto h-48 fill-transparent stroke-accent stroke-[4px] absolute inset-0 m-auto scale-110 blur group-hover:scale-[1.15] duration-300 transition-transform' />}
                    </CardContent>
                    <CardHeader>
                      <h3 className='f-heading-3'>
                        {item.title}
                      </h3>
                      <p className='f-body-1 text-muted-foreground text-balance mt-spacing-3'>
                        {item.description}
                      </p>
                      {item.slug && (
                        <div className='mt-spacing-6'>
                          <CallToAction href={item.slug} variant='secondary' contentClassName='flex gap-x-2 items-center justify-center'>
                            Saber mas
                            <LightningBoltIcon className='w-auto h-3.5' />
                          </CallToAction>
                        </div>
                      )}
                    </CardHeader>
                  </div>
                  <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-accent/0 via-accent/90 to-accent/0 transition-opacity duration-300 group-hover:opacity-60' />
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

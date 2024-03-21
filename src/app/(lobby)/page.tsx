import Image from 'next/image'
import Hero from '@/components/sections/hero'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CallToAction, CallToContact } from '@/components/call-to-action'
import { Icons } from '@/components/icons'
import { LightningBoltIcon } from '@radix-ui/react-icons'
import { ClientsCards } from '@/components/cards/clients-cards'
import { formatPhoneNumber } from '@/lib/utils'
import {
  clients,
  emergencyPhone,
  experience,
  services,
  whatsappEmergencyUrl
} from '@/config/organization'
import { siteConfig } from '@/config/site'

const servicesIcons = [
  Icons.Instalations,
  Icons.Maintenance,
  Icons.DesignEngineering
]

export default function IndexPage () {
  return (
    <>
      <Hero
        title={siteConfig.description}
        description='Desde instalaciones en baja tensión hasta proyectos en alta tensión, nuestro equipo altamente capacitado y comprometido se encarga de cada detalle.'
        videoSrc='/video/home-hero.mp4'
      />
      <section id='soluciones' className='bg-dot-white/[0.2] relative flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        <div className='container pt-spacing-7 relative'>
          <div className='cols-container'>
            <div className='w-8-cols lg:w-7-cols'>
              <h2 className='f-subhead-2 font-medium text-muted-foreground'>
                Soluciones integrales
              </h2>
              <p className='f-display-3 mt-spacing-4'>
                Desde la planificación hasta la ejecución, nos ocupamos de
                cada detalle.
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
                  className='group w-8-cols bg-gradient-to-tr from-black to-zinc-900 lg:w-4-cols rounded-3xl relative xxs:py-px xxs:px-0'
                >
                  <span className='h-2 absolute inset-x-0 top-0 overflow-hidden rounded-full transition-[height] duration-300'>
                    <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(180,25,25,0.6)_0%,rgba(180,25,25,0)_75%)] opacity-50 transition-opacity duration-300 group-hover:opacity-100' />
                  </span>
                  <div className='w-full h-full relative z-10 bg-zinc-900/20 group-hover:bg-zinc-900/10 rounded-3xl p-gutter transition-colors duration-300'>
                    <CardContent className='pt-spacing-5 pb-spacing-7 relative'>
                      {ServiceIcon
                        ? (
                          <>
                            <ServiceIcon className='w-auto h-40 sm:h-48 mx-auto fill-transparent stroke-accent stroke-[4px] relative' />
                            <ServiceIcon className='w-auto h-40 sm:h-48 fill-transparent stroke-accent stroke-[4px] absolute inset-x-0 top-spacing-5 mx-auto scale-110 blur group-hover:scale-[1.15] duration-300 transition-transform' />
                          </>
                          )
                        : <Icons.ImageOff className='w-auto h-40 sm:h-48 mx-auto fill-accent' />}
                    </CardContent>
                    <CardHeader>
                      <h3 className='f-subhead-2'>
                        {item.title}
                      </h3>
                      <p className='f-body-1 text-muted-foreground mt-spacing-3'>
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
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      <section className='bg-dot-white/[0.2] relative flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        <div className='container pt-spacing-7 md:pt-spacing-9 relative'>
          <div className='cols-container'>
            <div className='w-8-cols md:w-4-cols lg:w-6-cols md:order-2'>
              <h2 className='f-subhead-2 font-medium text-muted-foreground'>
                Emergencias
              </h2>
              <p className='f-display-3 mt-spacing-4 text-balance'>
                Atendemos tus necesidades más urgentes, no importa el día ni la hora.
              </p>
              <div className='flex items-center gap-x-spacing-5 mt-spacing-6'>
                <Icons.Emergency className='w-auto h-20 sm:h-24 xl:h-36 opacity-90' />
                <CallToAction
                  href={whatsappEmergencyUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Whatsapp de emergencias, se abre en una nueva pestaña'
                  variant='secondary'
                  size='lg'
                  className=''
                  contentClassName='gap-x-2'
                >
                  <Icons.WhatsappOutlined className='w-auto h-5 lg:h-6' />
                  <span className='sr-only'>Teléfono de emergencias{' '}</span>
                  {formatPhoneNumber(emergencyPhone)}
                </CallToAction>
              </div>
            </div>
            <div className='w-8-cols md:w-4-cols lg:w-6-cols mt-spacing-7 md:mt-0 md:order-1'>
              <Image
                src='/images/emergency.webp'
                alt='Trabajadores dando mantenimiento a una torre de alta tensión'
                width={690}
                height={740}
                sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                loading='lazy'
                className='w-full rounded-xl'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-dot-white/[0.2] relative flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        <div className='container pt-spacing-7 md:pt-spacing-9 relative'>
          <div className='cols-container'>
            <div className='w-6-cols sm:w-8-cols lg:w-1/2-cols'>
              <h2 className='f-subhead-2 font-medium text-muted-foreground'>
                {experience.title}
              </h2>
              {typeof experience.description === 'string'
                ? (
                  <p className='f-heading-1 mt-spacing-4 text-balance'>
                    {experience.description}
                  </p>
                  )
                : experience.description && (
                  <div className='mt-spacing-4 space-y-spacing-3'>
                    {experience.description.map((paragraph, key) => (
                      <p key={key} className='f-heading-1 text-balance'>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              <div className='mt-spacing-6 space-y-spacing-4 pl-2 sm:pl-4'>
                {experience.items.map((paragraph, key) => (
                  <p key={key} className='f-subhead-2'>
                    {paragraph}
                  </p>
                ))}
              </div>
              <CallToContact className='mt-spacing-6' />
            </div>
            <div className='w-6-cols sm:w-8-cols lg:w-1/2-cols h-md sm:h-xl lg:h-[720px] mt-spacing-6 lg:mt-0 p-2 relative bg-card/40 border rounded-xl'>
              <div className='w-full h-full relative rounded-sm overflow-hidden'>
                <div className='aspect-video absolute inset-y-0 -left-1/2 xs:-left-1/4 md:left-0 lg:-left-1/2 mx-auto'>
                  <Image
                    src='/images/home-experience.webp'
                    alt='Trabajadores dando mantenimiento a una torre de alta tensión'
                    width={1280}
                    height={720}
                    sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                    loading='lazy'
                    className='aspect-video relative'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-dot-white/[0.2] relative flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        <div className='w-full py-spacing-9 relative overflow-hidden'>
          <div className='container'>
            <p className='f-heading-1 text-balance text-center'>
              Nos asociamos con los mejores
            </p>
          </div>
          <div className='full-bleed-container flex flex-col antialiased items-center justify-center overflow-hidden mt-spacing-6'>
            <ClientsCards
              items={clients}
              direction='right'
              speed='slow'
            />
          </div>
        </div>
      </section>
    </>
  )
}

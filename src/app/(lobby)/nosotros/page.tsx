import Image from 'next/image'
import { type Metadata } from 'next'
import Hero from '@/components/sections/hero'
import { culture } from '@/config/organization'
import { siteConfig } from '@/config/site'
import { type Heading } from '@/types'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Icons } from '@/components/icons'

const aboutHeading: Heading = {
  title: 'Más que equipo. Somos familia.',
  description: 'Construimos relaciones estrechas con nuestros clientes. Ofrecemos pasión, talento, experiencia y compromiso para desarrollar cualquier proyecto que se nos asigne.'
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Conocenos',
  description: aboutHeading.title
}

const cultureIcons = [
  Icons.Loyalty,
  Icons.Freedom,
  Icons.Feith,
  Icons.Appreciation,
  Icons.Excelence
]

export default function AboutPage () {
  return (
    <>
      <Hero
        title={aboutHeading.title}
        description={aboutHeading.description}
        link={{
          title: 'Conocenos',
          href: '/nosotros/#valores'
        }}
        videoSrc='/video/about-hero.mp4'
      />
      <section id='soluciones' className='bg-dot-white/[0.2] relative flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        <div className='container pt-spacing-7 relative'>
          <div className='cols-container'>
            <div className='w-8-cols lg:w-7-cols'>
              <h2 className='f-subhead-2 font-medium text-muted-foreground'>
                {culture.title}
              </h2>
              {typeof culture.description === 'string'
                ? (
                  <p className='f-display-3 text-balance mt-spacing-4'>
                    {culture.description}
                  </p>
                  )
                : culture.description && (
                  <div className='mt-spacing-4 space-y-spacing-3'>
                    {culture.description.map((paragraph, key) => (
                      <p key={key} className='f-display-3 text-balance'>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
            </div>
            <div className='w-8-cols lg:w-5-cols mt-spacing-5 lg:mt-0'>
              <div className='bg-card/40 rounded-3xl p-2 border'>
                <Image
                  src='/images/about-culture.webp'
                  alt='Trabajadores formando un circulo, en una reunión antes de la jornada laboral'
                  width={1920}
                  height={1080}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full rounded-xl'
                />
              </div>
            </div>
          </div>
          <div className='cols-container mt-spacing-6 gap-y-gutter'>
            {culture.items.map((item, key) => {
              const ServiceIcon = cultureIcons[key]

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
                    </CardHeader>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

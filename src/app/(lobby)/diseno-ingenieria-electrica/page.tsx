import { type Metadata } from 'next'
import Image from 'next/image'
import { Icons } from '@/components/icons'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'

const service = services.find(({ title }) => title === 'Diseño e ingeniería eléctrica')!

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: service.title,
  description: typeof service.description === 'string' ? service.description : siteConfig.description
}

export default function DesignEngineeringPage () {
  return (
    <>
      <section className='screen-container -mt-[74px] lg:-mt-[96px] bg-dot-white/[0.2] relative border-t-[6px] border-accent'>
        <div className='absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        <div className='container h-full relative z-10 pt-28'>
          <div className='h-full cols-container items-center'>
            <div className='w-6-cols sm:w-1/2-cols z-10'>
              <h1 className='f-display-1 text-balance'>
                {service.title}
              </h1>
            </div>
            <div className='w-6-cols sm:w-1/2-cols'>
              <div className='relative'>
                <Icons.DesignEngineering className='w-4/5 sm:w-full lg:w-4/5 h-auto mx-auto lg:mx-0 fill-transparent stroke-accent stroke-[4px] relative' />
                <Icons.DesignEngineering className='w-4/5 sm:w-full lg:w-4/5 h-auto fill-transparent stroke-accent stroke-[4px] absolute inset-x-0 top-0 mx-auto lg:mx-0 scale-110 blur group-hover:scale-[1.15] duration-300 transition-transform' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='soluciones' className='bg-dot-white/[0.2] relative flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        <div className='container py-spacing-7 relative'>
          <div className='cols-container'>
            <div className='w-8-cols lg:w-7-cols'>
              <h2 className='f-subhead-2 font-medium text-muted-foreground'>
                {service.title}
              </h2>
              {typeof service.description === 'string'
                ? (
                  <p className='f-display-3 text-balance mt-spacing-4'>
                    {service.description}
                  </p>
                  )
                : service.description && (
                  <div className='mt-spacing-4 space-y-spacing-3'>
                    {service.description.map((serviceItem, key) => (
                      <p key={key} className='f-display-3 text-balance'>
                        {serviceItem}
                      </p>
                    ))}
                  </div>
                )}
            </div>
            <div className='w-8-cols lg:w-5-cols mt-spacing-5 lg:mt-0'>
              <div className='bg-card/40 rounded-3xl p-2 border'>
                {service.image && (
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={service.image.width}
                    height={service.image.height}
                    sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                    loading='lazy'
                    className='w-full rounded-xl'
                  />
                )}
              </div>
            </div>
          </div>
          <ul className='cols-container mt-spacing-6 gap-y-gutter'>
            {service.items.map((item, key) => {
              return (
                <li
                  key={key}
                  className='group w-8-cols bg-gradient-to-tr from-black to-zinc-900 lg:w-4-cols border rounded-3xl relative py-px xxs:px-0'
                >
                  <span className='h-2 absolute inset-x-0 top-0 overflow-hidden rounded-full transition-[height] duration-300'>
                    <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(180,25,25,0.6)_0%,rgba(180,25,25,0)_75%)] opacity-50 transition-opacity duration-300 group-hover:opacity-100' />
                  </span>
                  <div className='w-full h-full flex items-center relative z-10 bg-zinc-900/20 group-hover:bg-zinc-900/10 rounded-3xl p-gutter transition-colors duration-300'>
                    <h3 className='f-subhead-2'>
                      {item.title}
                    </h3>
                  </div>
                  <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-accent/0 via-accent/90 to-accent/0 transition-opacity duration-500 group-hover:opacity-60' />
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

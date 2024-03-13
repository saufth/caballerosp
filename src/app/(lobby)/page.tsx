// import { ArrowTopRightIcon } from '@radix-ui/react-icons'
// import { Link } from '@/components/ui/link'
import Hero from '@/components/sections/hero'
// import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
// import { services } from '@/config/organization'

export default function IndexPage () {
  return (
    <>
      <Hero
        title={siteConfig.description}
        description='Desde instalaciones en baja tensión hasta proyectos en alta tensión, nuestro equipo altamente capacitado y comprometido se encarga de cada detalle.'
        videoSrc='/video/home-hero.mp4'
      />
      {/* <section>
        <div className='container'>
          <div className='grid place-content-center opacity-0 animate-show [animation-delay:1s]'>
            <h2 className='sr-only'>Nuestras soluciones</h2>
            <p className='f-heading-2 font-medium text-balance text-center'>
              En cada proyecto eléctrico que emprendemos, nos comprometemos a
              proporcionar soluciones eléctricas adaptadas a tus requerimientos.
            </p>
            <Link
              href='/nosotros'
              variant='default'
              size='lg'
              aria-label={`Acerca de ${siteConfig.name}`}
              className='mt-spacing-5 mx-auto'
            >
              Acerca de nosotros
              <ArrowTopRightIcon className='w-auto h-4 lg:h-5 ml-2' />
            </Link>
          </div>
          <div className='pb-spacing-7'>
            {services.map((model, key) => (
              <article key={key} className='lg:cols-container lg:even:flex-row-reverse lg:items-center mt-spacing-9'>
                <div className={cn('lg:w-1/3-cols flex justify-center', key % 2 !== 0 ? 'lg:justify-end' : 'lg:justify-start')}>
                  <div className='w-32 lg:w-auto aspect-square bg-secondary/20 border rounded-full flex justify-center items-center'>
                    <model.Icon className='w-1/2 sm:w-1/2 xl:w-1/2 h-auto' />
                  </div>
                </div>
                <div className={cn('w-full lg:w-2/3-cols mt-spacing-5 lg:mt-0', key % 2 === 0 ? 'lg:pl-8 2xl:pl-20' : '2xl:pr-8')}>
                  <div className='text-center lg:text-left'>
                    <h3>
                      <span className='f-display-3 font-medium text-balance text-gradient'>
                        {model.title}
                      </span>
                    </h3>
                    <p className='mt-spacing-4 f-heading-2 text-balance'>
                      {model.description}.
                    </p>
                  </div>
                  {model.slug && (
                    <Link
                      href={model.slug}
                      target='_blank'
                      rel='noreferrer'
                      variant='default'
                      size='full'
                      aria-label={`Página principal de ${model.title}, se abre en una nueva pestaña`}
                      className='mt-spacing-5 flex items-center gap-spacing-2 mx-auto lg:mx-0'
                    >
                      Saber más
                      <ArrowTopRightIcon className='w-auto h-4 lg:h-[18px]' />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}
    </>
  )
}

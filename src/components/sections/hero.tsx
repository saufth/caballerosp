import React from 'react'
import BackgroundVideo from '@/components/background-video'
import { Link } from '@/components/ui/link'
import { type HeadingWithOptionalDescription } from '@/types'
import { ArrowRightIcon } from '@radix-ui/react-icons'

interface HeroProps extends HeadingWithOptionalDescription {
  videoSrc?: string
}

export default function Hero ({ title, description, videoSrc }: HeroProps) {
  return (
    <section className='fullscreen -mt-[80px] lg:-mt-[102px] relative overflow-hidden'>
      <div className='container relative z-10 pt-28'>
        <div className='max-w-[340px] sm:max-w-xl xl:max-w-5xl'>
          <h1 className='f-display-1 text-balance opacity-0 animate-show [animation-delay:300ms]'>
            {title}
          </h1>
          {typeof description === 'string'
            ? (
              <p className='f-heading-3 text-balance mt-spacing-4 opacity-0 animate-show [animation-delay:400ms]'>
                {description}
              </p>
              )
            : description && (
              <div className='mt-spacing-4 space-y-spacing-3 opacity-0 animate-show [animation-delay:400ms]'>
                {description.map((paragraph, key) => (
                  <p key={key} className='f-heading-3 text-balance'>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          <Link
            href='/#soluciones'
            size='lg'
            variant='default'
            className='group bg-white mt-spacing-6 h-16 lg:h-20 lg:text-lg flex gap-x-20 overflow-hidden opacity-0 animate-show [animation-delay:500ms]'
          >
            <span className='z-30 text-primary-foreground group-hover:text-foreground transition-colors duration-300'>
              Soluciones
            </span>
            <div className='w-10 h-10 rounded-full grid place-content-center relative z-20'>
              <ArrowRightIcon className='w-4 h-4 lg:w-5 lg:h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2' />
              <div className='w-full h-full bg-accent rounded-full absolute inset-0 -z-10 m-auto transition-transform duration-300 group-hover:scale-[16]' />
            </div>
          </Link>
        </div>
      </div>
      {videoSrc && (<BackgroundVideo src={videoSrc} />)}
    </section>
  )
}

import React from 'react'
import NextLink from '@/components/ui/next-link'
import BackgroundVideo from '@/components/background-video'
import { Button } from '@/components/ui/button'
import { LightningBoltIcon } from '@radix-ui/react-icons'
import { type HeadingWithOptionalDescription } from '@/types'

interface HeroProps extends HeadingWithOptionalDescription {
  videoSrc?: string
}

export default function Hero ({ title, description, videoSrc }: HeroProps) {
  return (
    <section className='screen-container -mt-[79px] lg:-mt-[102.5px] relative overflow-hidden'>
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
          <Button
            asChild
            size='lg'
            variant='default'
            className='group bg-white h-16 lg:h-20 mt-spacing-6 overflow-hidden opacity-0 animate-show [animation-delay:500ms]'
          >
            <NextLink className='flex gap-x-spacing-7' href='/#soluciones'>
              <span className='z-30 text-lg text-primary-foreground group-hover:text-foreground transition-colors duration-300'>
                Soluciones
              </span>
              <div className='w-10 h-10 rounded-full grid place-content-center relative z-20'>
                <LightningBoltIcon className='w-4 h-4 lg:w-5 lg:h-5 relative z-10 transition-transform duration-300 group-hover:scale-150' />
                <div className='w-full h-full bg-accent rounded-full absolute inset-0 -z-10 m-auto transition-transform duration-300 group-hover:scale-[16]' />
              </div>
            </NextLink>
          </Button>
        </div>
      </div>
      {videoSrc && (<BackgroundVideo src={videoSrc} />)}
    </section>
  )
}

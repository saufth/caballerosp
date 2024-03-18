'use client'
import NextLink from '@/components/ui/next-link'
import BackgroundVideo from '@/components/background-video'
import { Button } from '@/components/ui/button'
import { LightningBoltIcon } from '@radix-ui/react-icons'
import { type HeadingWithOptionalDescription } from '@/types'
import { motion } from 'framer-motion'

interface HeroProps extends HeadingWithOptionalDescription {
  videoSrc?: string
}

export default function Hero ({ title, description, videoSrc }: HeroProps) {
  return (
    <section className='screen-container -mt-[74px] lg:-mt-[96px] relative overflow-hidden border-t-4 border-accent'>
      <div className='container relative z-10 pt-28'>
        <div className='max-w-[340px] sm:max-w-xl xl:max-w-5xl'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
              type: 'spring'
            }}
            className='f-display-1 text-balance'
          >
            {title}
          </motion.h1>
          {typeof description === 'string'
            ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 1.2,
                  type: 'spring'
                }}
                className='f-heading-3 text-balance mt-spacing-4'
              >
                {description}
              </motion.p>
              )
            : description && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 1.2,
                  type: 'spring'
                }}
                className='mt-spacing-4 space-y-spacing-3'
              >
                {description.map((paragraph, key) => (
                  <p key={key} className='f-heading-3 text-balance'>
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.5,
              type: 'spring'
            }}
            className='mt-spacing-6'
          >
            <Button
              asChild
              size='lg'
              variant='default'
              className='group bg-white h-16 lg:h-20 overflow-hidden'
            >
              <NextLink className='flex gap-x-spacing-7' href='/#soluciones'>
                <span className='z-30 text-lg text-primary-foreground group-hover:text-foreground transition-colors duration-700'>
                  Soluciones
                </span>
                <div className='w-10 h-10 rounded-full grid place-content-center relative z-20'>
                  <LightningBoltIcon className='w-4 h-4 lg:w-5 lg:h-5 relative z-10 transition-transform duration-300 group-hover:scale-150' />
                  <div className='w-full h-full bg-accent rounded-full absolute inset-0 -z-10 m-auto transition-transform duration-700 group-hover:scale-[16]' />
                </div>
              </NextLink>
            </Button>
          </motion.div>
        </div>
      </div>
      {videoSrc && (<BackgroundVideo src={videoSrc} />)}
    </section>
  )
}

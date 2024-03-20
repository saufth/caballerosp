'use client'
import BackgroundVideo from '@/components/background-video'
import { CallToAction } from '@/components/call-to-action'
import { LightningBoltIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { type HeadingWithOptionalDescription } from '@/types'

interface HeroProps extends HeadingWithOptionalDescription {
  videoSrc?: string
}

export default function Hero ({ title, description, videoSrc }: HeroProps) {
  return (
    <section className='screen-container -mt-[74px] lg:-mt-[96px] relative overflow-hidden border-t-[6px] border-accent'>
      <div className='container relative z-10 pt-28'>
        <div className='max-w-[340px] sm:max-w-xl xl:max-w-5xl'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
              type: 'tween'
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
                  type: 'tween'
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
                  type: 'tween'
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
              type: 'tween'
            }}
            className='mt-spacing-6'
          >
            <CallToAction
              href='/#soluciones'
              size='lg'
              className='group h-16 lg:h-20 overflow-hidden'
              contentClassName='flex gap-x-spacing-7'
            >
              <span className='z-30 text-lg text-primary-foreground transition-colors duration-700'>
                Soluciones
              </span>
              <div className='w-10 lg:w-11 h-10 lg:h-11 bg-accent rounded-full grid place-content-center relative z-20'>
                <LightningBoltIcon className='w-4 h-4 lg:w-5 lg:h-5 relative z-10 [&_*]:fill-accent-foreground group-hover:scale-[1.3] transition-transform duration-500' />
                <div className='w-full h-full bg-accent/10 rounded-full absolute inset-0 -z-10 m-auto transition-transform duration-700 scale-0 group-hover:scale-[4]' />
              </div>
            </CallToAction>
          </motion.div>
        </div>
      </div>
      {videoSrc && (<BackgroundVideo src={videoSrc} />)}
    </section>
  )
}

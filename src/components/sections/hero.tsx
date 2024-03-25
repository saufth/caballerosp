'use client'
import BackgroundVideo from '@/components/background-video'
import { CallToAction } from '@/components/call-to-action'
import { LightningBoltIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { type NavItem, type HeadingWithOptionalDescription } from '@/types'

interface HeroProps extends HeadingWithOptionalDescription {
  link: NavItem
  videoSrc?: string
}

export default function Hero ({ title, description, link, videoSrc }: HeroProps) {
  return (
    <section className='screen-container -mt-[74px] lg:-mt-[96px] relative overflow-hidden border-t-[6px] border-accent'>
      <div className='container relative z-10 pt-28'>
        <div className='max-w-[350px] sm:max-w-xl xl:max-w-4xl'>
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
              href={link.href}
              size='lg'
              className='group overflow-hidden'
              contentClassName='flex gap-x-spacing-4'
            >
              {link.title}
              <div className='w-7 md:w-8 h-7 md:h-8 bg-accent rounded-full grid place-content-center relative z-20'>
                <LightningBoltIcon className='w-3.5 md:w-4 h-3.5 md:h-4 relative z-10 [&_*]:fill-accent-foreground group-hover:scale-[1.3] transition-transform duration-500' />
                <div className='w-full h-full bg-accent/10 rounded-full absolute inset-0 -z-10 m-auto transition-transform duration-500 scale-0 group-hover:scale-[4]' />
              </div>
            </CallToAction>
          </motion.div>
        </div>
      </div>
      {videoSrc && (<BackgroundVideo src={videoSrc} />)}
    </section>
  )
}

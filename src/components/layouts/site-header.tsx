'use client'
import { useState } from 'react'
import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowRightIcon, LightningBoltIcon } from '@radix-ui/react-icons'
import { CallToAction } from '@/components/call-to-action'
import { Link } from '@/components/ui/link'
import { Logotype } from '@/components/layouts/logotype'
import { WhatsappMenu } from '@/components/layouts/whatsapp-menu'
import { cn } from '@/lib/utils'
import { contactEmail } from '@/config/organization'
import { siteConfig, siteNav } from '@/config/site'

export default function SiteHeader () {
  const { scrollYProgress } = useScroll()
  const [isOnTop, setIsOnTop] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useMotionValueEvent(scrollYProgress, 'change', (latestScrollY) => {
    if (typeof latestScrollY === 'number') {
      const direction = latestScrollY! - scrollYProgress.getPrevious()!
      const isScrollOnTop = scrollYProgress.get() < 0.05

      setIsOnTop(isScrollOnTop)

      if (isScrollOnTop) {
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(false)
        } else {
          setVisible(true)
        }
      }
    }
  })

  const contactLink = siteConfig.mainNav.find(({ href }) => href === '/contacto')!

  return (
    <AnimatePresence mode='wait'>
      <header
        className={cn(
          'w-full sticky top-0 left-0 z-40 border-b transition-[background-color,border-color,top] duration-300 bg-background/70 backdrop-filter backdrop-saturate-150 backdrop-blur-lg',
          (isOnTop || isMenuOpen) && 'bg-transparent border-transparent backdrop-filter-none',
          visible && '-top-20 lg:-top-28'
        )}
      >
        <nav
          className={cn('relative border-t-4 border-accent transition-[border]', !isOnTop && 'border-t-0')}
          aria-label={`${siteConfig.name} directory`}
        >
          <div className='container'>
            <div
              className='w-full h-[74px] lg:h-24 flex justify-between items-center'
            >
              <div className='h-10 lg:h-12'>
                <Logotype onClick={closeMenu} />
              </div>
              <div className='flex items-center gap-x-5'>
                <div className='hidden lg:flex items-center gap-x-5'>
                  <ul className='flex items-center gap-x-5 pr-1'>
                    {siteNav.map((navItem, key) => (
                      <li key={key} className='last:hidden'>
                        <Link href={navItem.href}>
                          {navItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <WhatsappMenu />
                  <CallToAction
                    href={contactLink.href}
                    variant='secondary'
                    size='lg'
                    contentClassName='flex items-center gap-x-2'
                  >
                    {contactLink.title}
                    <LightningBoltIcon className='w-4 h-4 [&_*]:fill-secondary-foreground' />
                  </CallToAction>
                </div>
                <div className='block lg:hidden'>
                  <div className='block lg:hidden w-8 h-2.5 relative [&>span]:transition-all [&>span]:duration-300' onClick={toggleMenu}>
                    <span className={cn('w-4/5 h-0.5 bg-primary absolute top-0 left-0', isMenuOpen && 'bg-emah inset-0 m-auto rotate-45')} />
                    <span className={cn('w-4/5 h-0.5 bg-primary absolute bottom-0 right-0', isMenuOpen && 'bg-emah inset-0 m-auto -rotate-45')} />
                    <span className='sr-only'>Toggle menu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={cn(
          'w-full h-0 bg-background/90 backdrop-filter backdrop-blur-md fixed flex flex-col justify-between top-0 left-0 z-30 overflow-hidden transition-[height] duration-300',
          isMenuOpen && 'h-[100dvh]'
        )}
      >
        <ul className='container mt-spacing-8'>
          {siteConfig.mainNav.map((navItem, key) => (
            <li key={key} className='border-b-[1.5px] first:border-t-[1.5px]'>
              <Link
                className='flex justify-between text-lg rounded-none w-full px-0 py-2.5 sm:py-2.5'
                href={navItem.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {navItem.title}
                <ArrowRightIcon className='w-5 h-5' />
              </Link>
            </li>
          ))}
        </ul>
        <div className='container pb-8'>
          <div>
            <div className='text-sm sm:text-base text-muted-foreground'>
              Correo electrónico
            </div>
            <Link className='px-0 text-lg' href={`mailto:${contactEmail}`} onClick={() => setIsMenuOpen(false)}>
              {contactEmail}
            </Link>
          </div>
        </div>
      </div>
      <div className='w-14 h-14 bg-background border rounded-full grid place-content-center lg:hidden fixed bottom-gutter right-gutter z-50'>
        <WhatsappMenu />
      </div>
    </AnimatePresence>
  )
}

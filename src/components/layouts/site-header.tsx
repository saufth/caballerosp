'use client'
import { useState } from 'react'
import NextLink from '@/components/ui/next-link'
import { ArrowRightIcon, LightningBoltIcon } from '@radix-ui/react-icons'
import { CallToAction } from '@/components/call-to-action'
import { Icons } from '@/components/icons'
import { Link } from '@/components/ui/link'
import { WhatsappMenu } from '@/components/layouts/whatsapp-menu'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { contactEmail } from '@/config/organization'
import { siteConfig } from '@/config/site'

export default function SiteHeader () {
  const { scrollYProgress } = useScroll()
  const [isOnTop, setIsOnTop] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
        setIsOnTop(true)
      } else {
        setIsOnTop(false)
        direction < 0
          ? setVisible(true)
          : setVisible(false)
      }
    }
  })

  const contactLink = siteConfig.mainNav.find(({ href }) => href === '/contacto')!

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{
          duration: 0.3,
          delay: 0.3
        }}
        className='w-full sticky top-0 left-0 z-40'
      >
        <nav
          className='relative'
          aria-label={`${siteConfig.name} directory`}
        >
          <div className='container relative z-10'>
            <div
              className='w-full h-[74px] lg:h-24 flex justify-between items-center'
            >
              <div className='h-10 lg:h-12'>
                <NextLink href='/' onClick={closeMenu}>
                  <Icons.Logoalt className='w-auto h-full' />
                  <span className='sr-only'>{siteConfig.name} home</span>
                </NextLink>
              </div>
              <div className='flex items-center gap-x-5'>
                <div className='hidden lg:flex items-center gap-x-5'>
                  <ul className='flex items-center gap-x-5 pr-1'>
                    {siteConfig.mainNav.map((navItem, key) => (
                      <li key={key} className='first:hidden last:hidden'>
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
                  <button className='block lg:hidden w-9 h-2.5 relative' onClick={toggleMenu}>
                    <motion.span
                      initial={{
                        backgroundColor: 'oklch(var(--foreground))',
                        top: 0,
                        left: 0
                      }}
                      animate={{
                        backgroundColor: isMenuOpen ? 'oklch(var(--accent))' : 'oklch(var(--foreground))',
                        top: isMenuOpen ? 3.8 : 0,
                        left: isMenuOpen ? 3.6 : 0,
                        rotate: isMenuOpen ? 45 : 0
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.3
                      }}
                      className='w-4/5 h-0.5 absolute'
                    />
                    <motion.span
                      initial={{
                        backgroundColor: 'oklch(var(--foreground))',
                        bottom: 0,
                        right: 0
                      }}
                      animate={{
                        backgroundColor: isMenuOpen ? 'oklch(var(--accent))' : 'oklch(var(--foreground))',
                        bottom: isMenuOpen ? 3.8 : 0,
                        right: isMenuOpen ? 3.6 : 0,
                        rotate: isMenuOpen ? -45 : 0
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.3
                      }}
                      className='w-4/5 h-0.5 absolute'
                    />
                    <span className='sr-only'>Toggle menu</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: (isOnTop || isMenuOpen) ? 0 : 1 }}
            transition={{
              duration: 0.3,
              delay: 0.3
            }}
            className='absolute inset-0 border-b bg-background/70 backdrop-saturate-150 backdrop-blur-lg'
          />
        </nav>
      </motion.header>
      <motion.div
        initial={{ height: '0px' }}
        animate={{ height: isMenuOpen ? '100dvh' : '0px' }}
        transition={{
          duration: isMenuOpen ? 0.5 : 0.3,
          delay: isMenuOpen ? 0.5 : 0.4
        }}
        className='w-full bg-background/90 backdrop-filter backdrop-blur-md fixed flex flex-col justify-between top-0 left-0 z-30 overflow-hidden'
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
            <Link
              href={`mailto:${contactEmail}`}
              onClick={() => setIsMenuOpen(false)}
              className='px-0 text-lg'
            >
              {contactEmail}
            </Link>
          </div>
        </div>
      </motion.div>
      <div className='w-14 h-14 bg-background border rounded-full grid place-content-center lg:hidden fixed bottom-gutter right-gutter z-50'>
        <WhatsappMenu />
      </div>
    </>
  )
}

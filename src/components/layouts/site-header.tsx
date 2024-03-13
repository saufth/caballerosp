'use client'
import React from 'react'
import NextLink from 'next/link'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { CallToAction } from '@/components/call-to-action'
import { Icons } from '@/components/icons'
import { Link } from '@/components/ui/link'
import { PhoneToggle } from '@/components/layouts/phone-toggle'
import { cn } from '@/lib/utils'
import { contactEmail } from '@/config/organization'
import { siteConfig } from '@/config/site'

export default function SiteHeader () {
  const { scrollY } = useScroll()
  const [isOnTop, setIsOnTop] = React.useState(true)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsOnTop(latestScrollY < 1)
  })

  return (
    <>
      <header
        className={cn(
          'w-full sticky top-0 left-0 z-40 border-b transition-colors duration-300 bg-background/70 backdrop-filter backdrop-saturate-150 backdrop-blur-lg transition-color',
          (isOnTop || isMenuOpen) && 'bg-transparent border-transparent backdrop-filter-none'
        )}
      >
        <nav className='relative border-t-[6px] border-accent' aria-label={`${siteConfig.name} directory`}>
          <div className='container'>
            <div
              className='w-full h-[74px] lg:h-24 flex justify-between items-center'
            >
              <div className='h-10 lg:h-12'>
                <NextLink href='/' onClick={closeMenu}>
                  <Icons.Logoalt className='w-auto h-full stroke-primary [fill-opacity:0] animate-draw [stroke-dasharray:1300] [stroke-dashoffset:1300]' />
                  <span className='sr-only'>{siteConfig.name} home</span>
                </NextLink>
              </div>
              <div className='flex items-center gap-x-5'>
                <div className='hidden lg:flex items-center gap-x-5'>
                  <ul className='flex items-center gap-x-5'>
                    {siteConfig.mainNav.map((navItem, key) => (
                      <li key={key} className='last:hidden first:hidden'>
                        <Link href={navItem.href} className='hidden lg:flex px-1 font-medium' variant='link'>
                          {navItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <PhoneToggle />
                  <CallToAction
                    className={cn(
                      'hidden lg:flex transition-colors divide-neutral-300',
                      isOnTop && 'bg-black/90 hover:bg-black text-white hover:text-white'
                    )}
                  />
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
    </>
  )
}

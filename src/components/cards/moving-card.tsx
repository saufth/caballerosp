'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import NextLink from '@/components/ui/next-link'
import { cn } from '@/lib/utils'
import { type ItemExternal } from '@/types'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export const MovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className
}: {
  items: ItemExternal[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  })

  const [start, setStart] = useState(false)

  function addAnimation () {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '500s')
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, _idx) => (
          <li
            className='w-64 sm:w-[320px] md:w-[450px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 px-6 sm:px-7 md:px-8 py-4 sm:py-5 md:py-6 bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900'
            key={item.name}
          >
            <NextLink href={item.url}>
              <div
                aria-hidden='true'
                className='user-select-none -z-[1] pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
              />
              <span className='relative z-20'>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-24 sm:w-28 md:w-[150px] h-auto'
                />
              </span>
              <div className='relative z-20 mt-6'>
                <div className='md:text-lg leading-[1.6] text-muted-foreground flex justify-end items-center gap-x-2'>
                  {item.name}
                  <ArrowRightIcon className='w-4 h-4 ml-2 [&_*]:fill-muted-foreground' />
                </div>
              </div>
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

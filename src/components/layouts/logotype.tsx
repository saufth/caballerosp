import { type MouseEventHandler } from 'react'
import NextLink from '@/components/ui/next-link'
import { Icons } from '@/components/icons'
import { siteConfig } from '@/config/site'

export function Logotype ({ onClick }: { onClick?: MouseEventHandler<HTMLAnchorElement> }) {
  return (
    <NextLink href='/' onClick={onClick}>
      <Icons.Logoalt className='w-auto h-full stroke-primary [fill-opacity:0] animate-draw [stroke-dasharray:1300] [stroke-dashoffset:1300]' />
      <span className='sr-only'>{siteConfig.name} home</span>
    </NextLink>
  )
}

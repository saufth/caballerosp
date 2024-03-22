import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { services } from '@/config/organization'
import { type SiteConfig, type MainNavItem, type NavItem } from '@/types'

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const socialMedia: NavItem[] = [
  {
    title: 'facebook',
    href: 'https://fb.com/CaballeroSolutions'
  },
  {
    title: 'instagram',
    href: 'https://instagram.com/caballero.solutions.power'
  }
]

export const siteNav: MainNavItem[] = [
  {
    title: 'Nuestras soluciones',
    href: '/#soluciones',
    items: services.map(({ title, slug }) => ({ title, href: slug! }))
  },
  {
    title: 'Acerca de nosotros',
    href: '/nosotros'
  },
  {
    title: 'Ponte en contacto',
    href: '/contacto'
  }
]

export const siteConfig: SiteConfig = {
  name: 'Caballero Solutions Power',
  description: 'Baja la tensión. Déjanos la alta.',
  url: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
  author,
  mainNav: [
    {
      title: 'Página principal',
      href: '/'
    },
    ...siteNav
  ]
}

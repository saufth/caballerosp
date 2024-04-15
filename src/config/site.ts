import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { services } from '@/config/services'
import {
  type SiteConfig,
  type MainNavItem,
  type NavItem,
  type NavItemWithChildren
} from '@/types'

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const socialNav: NavItem[] = [
  {
    title: 'facebook',
    href: 'https://fb.com/CaballeroSolutions'
  },
  {
    title: 'instagram',
    href: 'https://instagram.com/caballero.solutions.power'
  }
]

const servicesNav: NavItemWithChildren[] = services.map(({ title, slug }) => ({ title, href: slug! }))

export const siteNav: MainNavItem[] = [
  {
    title: 'Soluciones',
    href: '/#soluciones',
    items: servicesNav
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

export const domain = 'caballerosolutionspower.com'

export const contactEmail = `mkt@${domain}`

export const siteConfig: SiteConfig = {
  name: 'Caballero Solutions Power',
  description: 'Baja la tensión. Déjanos la alta.',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Página principal',
      href: '/'
    },
    ...siteNav
  ]
}

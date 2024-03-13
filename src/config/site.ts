import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type SiteConfig, type MainNavItem } from '@/types'

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const siteNav: MainNavItem[] = [
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

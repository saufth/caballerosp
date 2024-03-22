import { type Metadata } from 'next'
import Hero from '@/components/sections/hero'
import { siteConfig } from '@/config/site'
import { type Heading } from '@/types'

const aboutHeading: Heading = {
  title: 'Más que equipo. Somos familia.',
  description: 'Construimos relaciones estrechas con nuestros clientes. Ofrecemos pasión, talento, experiencia y compromiso para desarrollar cualquier proyecto que se nos asigne.'
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Conocenos',
  description: aboutHeading.title
}

export default function AboutPage () {
  return (
    <>
      <Hero
        title={aboutHeading.title}
        description={aboutHeading.description}
        link={{
          title: 'Conocenos',
          href: '/nosotros/#valores'
        }}
        videoSrc='/video/about-hero.mp4'
      />
    </>
  )
}

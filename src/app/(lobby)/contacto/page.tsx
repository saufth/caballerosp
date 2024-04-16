import { type Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/forms/contact-form'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Contáctanos',
  description: siteConfig.description
}

export default function ContactPage () {
  return (
    <>
      <div className='pt-spacing-6 pb-spacing-7'>
        <div className='container'>
          <h1 className='f-display-3 text-balanced'>
            <span className='text-gradient'>
              Pongámonos en contacto
            </span>
          </h1>
          <div className='cols-container mt-spacing-6'>
            <div className='w-full lg:w-5-cols relative mt-12 lg:mt-0 order-2 lg:order-1'>
              <ContactForm />
            </div>
            <div className='w-full lg:w-7-cols order-1 lg:order-2'>
              <div className='bg-card/40 rounded-3xl p-2 border'>
                <Image
                  src='/images/contact-hero.webp'
                  alt='Dos hombres de negocios discutiendo en una oficina moderna'
                  width={3200}
                  height={2400}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full rounded-xl'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

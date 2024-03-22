import { Link } from '@/components/ui/link'
import { Icons } from '@/components/icons'
import { formatPhoneNumber } from '@/lib/utils'
import {
  contactEmail,
  address,
  contactPhone,
  whatsappUrl
} from '@/config/organization'
import { siteConfig } from '@/config/site'

const servicesLink = siteConfig.mainNav.find(({ title }) => title === 'Nuestras soluciones')!

export default function Menu () {
  return (
    <div className='cols-container gap-y-spacing-7'>
      <div className='w-6-cols sm:w-8-cols lg:w-5-cols xl:w-6-cols flex flex-col gap-y-spacing-4 order-2 lg:order-1'>
        <Link
          href={whatsappUrl}
          target='_blank'
          rel='noreferrer'
          size='xl'
          aria-label='Whatsapp de atención al cliente, se abre en una nueva pestaña'
          className='w-fit flex gap-x-2 items-center'
        >
          <Icons.WhatsappOutlined className='w-auto h-6 lg:h-8' />
          <span className='sr-only'>Teléfono de emergencias{' '}</span>
          {formatPhoneNumber(contactPhone)}
        </Link>
        <Link
          href={address.url}
          target='_blank'
          rel='noreferrer'
          size='xl'
          aria-label='Abre la ubicación del corporativo en Google Maps, se abre en una nueva pestaña o en tu aplicación de mapas predeterminada'
          className='w-fit text-balance'
        >
          {address.name}
        </Link>
        <Link
          href={`mailto:${contactEmail}`}
          target='_blank'
          size='lg'
          rel='noreferrer'
          aria-label='Envía un mensaje con tu servicio de correo, se abre en una nueva pestaña o en tu cliente de correo predeterminado'
          className='w-fit xxs:text-lg sm:f-subhead-2'
        >
          {contactEmail}
        </Link>
      </div>
      <nav
        className='w-6-cols sm:w-8-cols lg:w-7-cols xl:w-6-cols flex flex-col md:flex-row lg:justify-around gap-spacing-6 lg:gap-gutter order-1 lg:order-2'
        aria-label='Navegación'
      >
        <div>
          <div className='text-xl sm:text-2xl text-muted-foreground font-medium'>
            Navegación
          </div>
          <ul className='space-y-spacing-3 mt-spacing-4'>
            {siteConfig.mainNav.map((navItem, key) => {
              return navItem.title !== 'Nuestras soluciones' && (
                <li key={key}>
                  <Link
                    href={navItem.href}
                    aria-label={navItem.title}
                    className='text-lg sm:text-xl font-medium'
                  >
                    {navItem.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <div className='text-xl sm:text-2xl text-muted-foreground font-medium'>
            Soluciones
          </div>
          <ul className='space-y-spacing-3 mt-spacing-4'>
            {servicesLink.items!.map((navItem, key) => {
              return navItem.title !== 'Nuestras soluciones' && (
                <li key={key}>
                  <Link
                    href={navItem.href}
                    aria-label={navItem.title}
                    className='text-lg sm:text-xl font-medium'
                  >
                    {navItem.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}

import { Link } from '@/components/ui/link'
import { Icons } from '@/components/icons'
import { formatPhoneNumber } from '@/lib/utils'
import {
  contactEmail,
  address,
  contactPhone,
  whatsappUrl
} from '@/config/organization'
import { siteConfig, socialMedia } from '@/config/site'
import SocialNav from './social-nav'

const servicesLink = siteConfig.mainNav.find(({ title }) => title === 'Soluciones')!

export default function Menu ({ action }: { action?: () => void }) {
  return (
    <div className='cols-container gap-y-spacing-6'>
      <div className='w-6-cols sm:w-8-cols lg:w-5-cols xl:w-6-cols flex flex-col gap-y-spacing-4 order-2 lg:order-1'>
        <Link
          href={whatsappUrl}
          onClick={action}
          aria-label='Whatsapp de atención al cliente, se abre en una nueva pestaña'
          target='_blank'
          size='xl'
          rel='noreferrer'
          className='w-fit flex gap-x-2 items-center'
        >
          <Icons.WhatsappOutlined className='w-auto h-6 lg:h-8' />
          <span className='sr-only'>Teléfono de emergencias{' '}</span>
          {formatPhoneNumber(contactPhone)}
        </Link>
        <Link
          href={address.url}
          onClick={action}
          aria-label='Abre la ubicación del corporativo en Google Maps, se abre en una nueva pestaña o en tu aplicación de mapas predeterminada'
          target='_blank'
          size='xl'
          rel='noreferrer'
          className='w-fit text-balance'
        >
          {address.name}
        </Link>
        <Link
          href={`mailto:${contactEmail}`}
          onClick={action}
          aria-label='Envía un mensaje con tu servicio de correo, se abre en una nueva pestaña o en tu cliente de correo predeterminado'
          target='_blank'
          rel='noreferrer'
          size='lg'
          className='w-fit xxs:text-lg sm:f-subhead-2'
        >
          {contactEmail}
        </Link>
        <SocialNav items={socialMedia} action={action} />
      </div>
      <nav
        className='w-6-cols sm:w-8-cols lg:w-7-cols xl:w-6-cols flex flex-col md:flex-row lg:justify-around gap-spacing-6 lg:gap-gutter order-1 lg:order-2'
        aria-label={`${siteConfig.name} directorio`}
      >
        <div>
          <div className='text-xl sm:text-2xl text-muted-foreground font-medium'>
            Navegación
          </div>
          <ul className='space-y-spacing-3 mt-spacing-4'>
            {siteConfig.mainNav.map((navItem, key) => {
              return navItem.title !== 'Soluciones' && (
                <li key={key}>
                  <Link
                    href={navItem.href}
                    onClick={action}
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
            {servicesLink.title}
          </div>
          <ul className='space-y-spacing-3 mt-spacing-4'>
            {servicesLink.items!.map((navItem, key) => {
              return navItem.title !== '' && (
                <li key={key}>
                  <Link
                    href={navItem.href}
                    onClick={action}
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

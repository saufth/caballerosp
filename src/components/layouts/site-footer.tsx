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

export default function SiteFooter () {
  return (
    <footer className='border-b-[6px] border-b-accent border-t'>
      <div className='container'>
        <div className='cols-container gap-y-spacing-7 py-spacing-7'>
          <div className='w-6-cols sm:w-5-cols lg:w-9-cols flex flex-col gap-y-spacing-4'>
            <Link
              href={whatsappUrl}
              target='_blank'
              rel='noreferrer'
              aria-label='Whatsapp de atención al cliente, se abre en una nueva pestaña'
              className='f-subhead-2 flex gap-x-2 items-center'
            >
              <Icons.WhatsappOutlined className='w-auto h-6 lg:h-8' />
              <span className='sr-only'>Teléfono de emergencias{' '}</span>
              {formatPhoneNumber(contactPhone)}
            </Link>
            <Link
              href={address.url}
              target='_blank'
              rel='noreferrer'
              aria-label='Abre la ubicación del corporativo en Google Maps, se abre en una nueva pestaña o en tu aplicación de mapas predeterminada'
              className='f-subhead-1 sm:f-subhead-2 text-balance'
            >
              {address.name}
            </Link>
            <Link
              href={`mailto:${contactEmail}`}
              target='_blank'
              rel='noreferrer'
              aria-label='Envía un mensaje con tu servicio de correo, se abre en una nueva pestaña o en tu cliente de correo predeterminado'
              className='text-lg sm:f-heading-3'
            >
              {contactEmail}
            </Link>
          </div>
          <nav className='w-6-cols sm:w-3-cols lg:w-3-cols' aria-label='Navegación'>
            <div className='text-xl sm:text-2xl text-muted-foreground font-medium'>
              Navegación
            </div>
            <ul className='space-y-spacing-3 mt-spacing-4'>
              {siteConfig.mainNav.map((item, key) => (
                <li key={key}>
                  <Link
                    href={item.href}
                    aria-label={item.title}
                    className='text-lg sm:text-xl font-medium'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='pb-spacing-6 sm:pt-spacing-6 flex flex-col gap-y-spacing-3 sm:flex-row justify-between'>
          <div className='text-muted-foreground text-lg lg:text-xl font-medium order-2 sm:order-1'>
            {`${siteConfig.name} © ${new Date().getFullYear()}`}
          </div>
          <div className='text-muted-foreground text-lg lg:text-xl font-medium order-1 sm:order-2'>
            Política de privacidad
          </div>
        </div>
      </div>
    </footer>
  )
}

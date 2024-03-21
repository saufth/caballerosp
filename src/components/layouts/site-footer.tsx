import { Link } from '@/components/ui/link'
import { contactEmail, address } from '@/config/organization'
import { siteConfig } from '@/config/site'

export default function SiteFooter () {
  return (
    <footer className='border-b-[6px] border-b-accent border-t'>
      <div className='container'>
        <div className='pt-spacing-7 flex flex-col md:flex-row gap-y-7 md:gap-y-0 md:justify-between'>
          {/* <div>
            <div className='text-sm sm:text-base font-medium text-muted-foreground'>
              {siteConfig.name}
            </div>
            <ul className='space-y-spacing-3 mt-spacing-3'>
              {services.map((item, key) => {
                return item.slug && (
                  <li key={key}>
                    <Link
                      href={item.slug}
                      target='_blank'
                      rel='noreferrer'
                      aria-label={`Página principal de ${item.title}, se abre en una nueva pestaña`}
                      className='xl:text-lg'
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div> */}
          <nav>
            <div className='text-sm sm:text-base font-medium text-muted-foreground' aria-label='Directorio'>
              Navegación
            </div>
            <ul className='space-y-spacing-3 mt-spacing-3'>
              {siteConfig.mainNav.map((item, key) => (
                <li key={key}>
                  <Link
                    href={item.href}
                    aria-label={item.title}
                    className='sm:text-lg'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='max-w-[264px]'>
            <div className='text-sm sm:text-base font-medium text-muted-foreground pb-spacing-3'>
              Dirección
            </div>
            <Link
              href={address.url}
              target='_blank'
              rel='noreferrer'
              aria-label='Abre la ubicación del corporativo en Google Maps, se abre en una nueva pestaña o en tu aplicación de mapas predeterminada'
              className='sm:text-lg text-balance'
            >
              {address.name}
            </Link>
          </div>
          <div>
            <div className='text-sm sm:text-base font-medium text-muted-foreground pb-spacing-3'>
              Correo electrónico
            </div>
            <Link
              href={`mailto:${contactEmail}`}
              target='_blank'
              rel='noreferrer'
              aria-label='Envía un mensaje con tu servicio de correo, se abre en una nueva pestaña o en tu cliente de correo predeterminado'
              className='sm:text-lg'
            >
              {contactEmail}
            </Link>
          </div>
        </div>
        <div className='mt-spacing-7 pb-spacing-5'>
          <span className='text-muted-foreground text-sm sm:text-base lg:text-lg lg:font-medium'>
            {`${siteConfig.name} © ${new Date().getFullYear()}`}
          </span>
        </div>
      </div>
    </footer>
  )
}

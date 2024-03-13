import { Link } from '@/components/ui/link'
import { services, contactEmail } from '@/config/organization'
import { siteConfig } from '@/config/site'

export default function SiteFooter () {
  return (
    <footer>
      <div className='container'>
        <div className='pt-spacing-7 flex flex-col md:flex-row gap-y-7 md:gap-y-0 md:justify-between'>
          <div>
            <div className='text-base sm:text-lg font-medium text-muted-foreground'>
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
                      className='text-lg xl:text-xl text-white'
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <nav>
            <div className='text-base font-medium sm:text-lg text-muted-foreground' aria-label='Directorio'>
              Directorio
            </div>
            <ul className='space-y-spacing-3 mt-spacing-3'>
              {siteConfig.mainNav.map((item, key) => (
                <li key={key}>
                  <Link
                    href={item.href}
                    aria-label={item.title}
                    className='text-lg xl:text-xl text-white'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <div className='text-base sm:text-lg font-medium text-muted-foreground'>
              Correo electrónico
            </div>
            <Link
              href={`mailto:${contactEmail}`}
              target='_blank'
              rel='noreferrer'
              aria-label='Envia un mensaje con tu servicio de correo, se abre en una nueva pestaña'
              className='text-lg xl:text-xl text-white'
            >
              {contactEmail}
            </Link>
          </div>
        </div>
        <div className='mt-spacing-7 pb-6'>
          <span className='text-muted-foreground text-lg'>
            {`${siteConfig.name} © ${new Date().getFullYear()}`}
          </span>
        </div>
      </div>
    </footer>
  )
}

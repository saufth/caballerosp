import Menu from '@/components/layouts/menu'
import { siteConfig } from '@/config/site'

export default function SiteFooter () {
  return (
    <footer className='border-b-[6px] border-b-accent border-t'>
      <div className='container'>
        <div className='py-spacing-7'>
          <Menu />
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

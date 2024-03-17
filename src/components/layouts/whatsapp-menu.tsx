import NextLink from 'next/link'
import { LightningBoltIcon, PersonIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { whatsappEmergencyUrl, whatsappUrl } from '@/config/organization'

export function WhatsappMenu () {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='group h-10 px-0 lg:px-0 bg-transparent focus-visible:ring-0 hover:bg-transparent ring-0 border-0'
        >
          <Icons.WhatsappOutlined className='w-7 h-auto' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='rounded-2xl dark:bg-black' align='end'>
        <DropdownMenuItem className='group rounded-full transition-colors duration-300'>
          <NextLink
            href={whatsappUrl}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Whatsapp de atención al cliente, se abre en una nueva pestaña'
            className='flex items-center gap-x-2'
          >
            <PersonIcon className='h-4 w-4 [&_*]:fill-primary group-hover:[&_*]:fill-secondary [&_*]:transition-colors [&_*]:duration-300' />
            <span className='text-primary group-hover:text-primary-foreground transition-colors duration-300'>
              Atención al cliente
            </span>
          </NextLink>
        </DropdownMenuItem>
        <DropdownMenuItem className='group rounded-full transition-colors duration-300'>
          <NextLink
            href={whatsappEmergencyUrl}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Whatsapp de emergencias, se abre en una nueva pestaña'
            className='flex items-center gap-x-2'
          >
            <LightningBoltIcon className='h-4 w-4 [&_*]:fill-primary group-hover:[&_*]:fill-secondary [&_*]:transition-colors [&_*]:duration-300' />
            <span className='text-primary group-hover:text-primary-foreground transition-colors duration-300'>
              Emergencias
            </span>
          </NextLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

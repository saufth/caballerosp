'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { LaptopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'

export function ModeToggle () {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='group h-10 px-0 lg:px-0 bg-transparent focus-visible:ring-0 hover:bg-transparent ring-0 border-0'
        >
          <SunIcon className='w-6 h-auto rotate-0 scale-100 transition-[transform,fill] duration-500 dark:-rotate-90 dark:scale-0' />
          <MoonIcon className='w-6 h-auto absolute rotate-90 scale-0 transition-[transform,fill] duration-500 dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='dark:bg-black' align='end'>
        <DropdownMenuItem className='group cursor-pointer transition-colors duration-500' onClick={() => setTheme('light')}>
          <SunIcon className='mr-2 h-4 w-4 [&_*]:fill-primary group-hover:[&_*]:fill-secondary [&_*]:transition-colors [&_*]:duration-500' />
          <span className='text-primary group-hover:text-primary-foreground transition-colors duration-500'>Claro</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='group cursor-pointer transition-colors duration-500' onClick={() => setTheme('dark')}>
          <MoonIcon className='mr-2 h-4 w-4 [&_*]:fill-primary group-hover:[&_*]:fill-secondary [&_*]:transition-colors [&_*]:duration-500' />
          <span className='text-primary group-hover:text-primary-foreground transition-colors duration-500'>Oscuro</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='group cursor-pointer transition-colors duration-500' onClick={() => setTheme('system')}>
          <LaptopIcon className='mr-2 h-4 w-4 [&_*]:fill-primary group-hover:[&_*]:fill-secondary [&_*]:transition-colors [&_*]:duration-500' />
          <span className='text-primary group-hover:text-primary-foreground transition-colors duration-500'>Sistema</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

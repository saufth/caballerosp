import React from 'react'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { Link, type LinkProps } from '@/components/ui/link'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { siteNav } from '@/config/site'

const callToActionIconVariants = cva(
  '[&_*]:transition-colors [&_*]:duration-300',
  {
    variants: {
      variant: {
        default: '',
        destructive: '[&_*]:fill-destructive-foreground',
        outline: '[&_*]:fill-primary [&_*]:group-hover:fill-primary-foreground',
        secondary: '[&_*]:fill-secondary-foreground',
        ghost: '[&_*]:fill-accent-foreground',
        link: ''
      },
      size: {
        default: 'w-4 h-4',
        xs: 'w-2.5 h-2.5',
        sm: 'w-3.5 h-3.5',
        lg: 'w-4 h-4',
        full: 'w-4 h-4',
        icon: 'w-3 h-3'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const contactLink = siteNav.find(({ href }) => href === '/contacto')!

interface CallToActionProps extends Omit<LinkProps, 'href' | 'children'> {
  icon?: boolean
}

const CallToAction = React.forwardRef<HTMLAnchorElement, CallToActionProps>(
  ({ className, variant = 'default', size = 'full', icon, ...props }, ref) => {
    return (
      <Link
        href={contactLink.href}
        className={cn(icon && 'flex items-center gap-x-2', className)}
        size={size}
        variant={variant}
        ref={ref}
        {...props}
      >
        {contactLink.title}
        {icon && <ArrowTopRightIcon className={cn(callToActionIconVariants({ variant, size }))} />}
      </Link>
    )
  }
)
CallToAction.displayName = 'CallToAction'

const aboutLink = siteNav.find(({ href }) => href === '/nosotros')!

const CallToAbout = React.forwardRef<HTMLAnchorElement, CallToActionProps>(
  ({ className, variant = 'ghost', size = 'full', icon, ...props }, ref) => {
    return (
      <Link
        href={aboutLink.href}
        className={cn(icon && 'flex items-center gap-x-2', className)}
        size={size}
        variant={variant}
        ref={ref}
        {...props}
      >
        {aboutLink.title}
        {icon && <ArrowTopRightIcon className={cn(callToActionIconVariants({ variant, size }))} />}
      </Link>
    )
  }
)
CallToAbout.displayName = 'CallToAbout'

const servicesLink = siteNav.find(({ href }) => href === '/soluciones')!

const CallToServices = React.forwardRef<HTMLAnchorElement, CallToActionProps>(
  ({ className, variant = 'ghost', size = 'full', icon, ...props }, ref) => {
    return (
      <Link
        href={servicesLink.href}
        className={cn('flex items-center gap-x-2', className)}
        size={size}
        variant={variant}
        ref={ref}
        {...props}
      >
        {servicesLink.title}
        {icon && <ArrowTopRightIcon className={cn(callToActionIconVariants({ variant, size }))} />}
      </Link>
    )
  }
)
CallToServices.displayName = 'CallToServices'

const purposeLink = siteNav.find(({ href }) => href === '/razon-de-ser')!

const CallToPurpose = React.forwardRef<HTMLAnchorElement, CallToActionProps>(
  ({ className, variant = 'ghost', size = 'full', icon, ...props }, ref) => {
    return (
      <Link
        href={purposeLink.href}
        className={cn('flex items-center gap-x-2', className)}
        size={size}
        variant={variant}
        ref={ref}
        {...props}
      >
        {purposeLink.title}
        {icon && <ArrowTopRightIcon className={cn(callToActionIconVariants({ variant, size }))} />}
      </Link>
    )
  }
)
CallToPurpose.displayName = 'CallToPurpose'

export { CallToAction, CallToAbout, CallToPurpose, CallToServices }

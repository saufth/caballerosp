import React from 'react'
import NextLink from '@/components/ui/next-link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const callToActionVariants = cva(
  'group w-fit block relative p-px rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        secondary: 'bg-muted',
        destructive: 'bg-destructive',
        ghost: 'bg-primary/50'
      },
      size: {
        default: 'h-8 lg:h-9',
        xs: 'h-6 lg:h-7',
        sm: 'h-7 lg:h-8',
        lg: 'h-11 lg:h-14',
        icon: 'h-7 lg:h-[33px] w-7 lg:w-[33px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const callToActionContentVariants = cva(
  'h-full relative z-10 rounded-full transition-colors duration-300',
  {
    variants: {
      variant: {
        default: 'bg-primary/70 group-hover:bg-primary/60 text-primary-foreground',
        secondary: 'bg-secondary/50 group-hover:bg-secondary/40 text-secondary-foreground',
        destructive: 'bg-destructive/60 group-hover:bg-destructive/50 text-destructive-foreground',
        ghost: 'bg-primary/50 hover:bg-primary/60 border'
      },
      size: {
        default: 'px-6',
        xs: 'px-2',
        sm: 'px-4',
        lg: 'px-8 font-medium',
        icon: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

type CallToActionVariantsProps = VariantProps<typeof callToActionVariants>

interface CallToActionProps
  extends React.ComponentProps<typeof NextLink>,
    CallToActionVariantsProps {
  contentClassName?: string
}

const CallToAction = (
  {
    children,
    className,
    contentClassName,
    variant,
    size,
    ...props
  }: CallToActionProps
) => (
  <NextLink
    className={cn(callToActionVariants({ variant, size, className }))}
    {...props}
  >
    <span className='absolute inset-0 overflow-hidden rounded-full'>
      <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(180,25,25,0.6)_0%,rgba(180,25,25,0)_75%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100' />
    </span>
    <div className={cn(callToActionContentVariants({ variant, size, className: contentClassName }))}>
      {children}
    </div>
    <span className='absolute -bottom-0 left-[1.125rem] h-0.5 w-[calc(100%-2.25rem)] bg-gradient-to-r from-accent/0 via-accent/90 to-accent/0 transition-opacity duration-500 group-hover:opacity-60' />
  </NextLink>
)
CallToAction.displayName = 'CallToAction'

export { CallToAction }

import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'w-max inline-flex items-center rounded-full justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary/95 text-primary-foreground hover:bg-primary',
        destructive: 'bg-destructive/95 text-destructive-foreground hover:bg-destructive',
        outline: 'border border-primary text-primary hover:bg-primary text-primary hover:text-primary-foreground',
        secondary: 'bg-gradient-to-r from-secondary to-secondary/95 text-secondary-foreground hover:bg-secondary',
        ghost: 'bg-primary/50 hover:bg-primary/60 border',
        link: 'hover:underline'
      },
      size: {
        default: 'h-8 lg:h-9 px-4 text-sm lg:text-base',
        xs: 'text-xs lg:text-sm',
        sm: 'px-1 text-sm lg:text-base',
        lg: 'w-fit h-11 lg:h-14 px-6 lg:px-8 text-sm lg:text-base font-medium',
        full: 'w-full lg:w-fit h-11 lg:h-14 px-6 lg:px-8 text-sm lg:text-base font-medium',
        icon: 'h-7 lg:h-[33px] w-7 lg:w-[33px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

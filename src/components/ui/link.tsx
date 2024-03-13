import React from 'react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    NextLinkProps,
    VariantProps<typeof buttonVariants> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = 'link', size = 'sm', ...props }, ref) => {
    return (
      <NextLink
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Link.displayName = 'Link'

export { Link }

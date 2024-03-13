import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  type CardDataProps
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function SimpleCard ({ item, className, ...props }: CardDataProps) {
  return (
    <Card
      as='article'
      className={cn(
        'border dark:border-zinc-700 dark:bg-zinc-900 px-4 py-4 sm:p-4 rounded-none',
        className
      )}
      {...props}
    >
      <div className='w-full h-full'>
        <CardHeader>
          <h3 className='f-subhead-2 font-semibold'>
            {item.title}
          </h3>
        </CardHeader>
        <CardContent className='mt-spacing-2'>
          <p className='f-body-1 text-muted-foreground'>
            {item.description}
          </p>
        </CardContent>
      </div>
    </Card>
  )
}

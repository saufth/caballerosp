import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  type CardDataProps
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function InfoCard ({ item, className, ...props }: CardDataProps) {
  return (
    <Card
      as='article'
      className={cn(
        'border dark:bg-zinc-950 dark:border-zinc-700 py-1 px-1 sm:p-1 rounded-none',
        className
      )}
      {...props}
    >
      <div className='w-full h-full dark:bg-gradient-to-t dark:from-zinc-950 dark:to-muted py-10 px-8 sm:py-12'>
        <CardHeader>
          <h3 className='f-subhead-2 font-medium'>
            {item.title}
          </h3>
        </CardHeader>
        <CardContent className='mt-spacing-2'>
          {typeof item.description === 'string'
            ? (
              <p className='f-body-1 text-muted-foreground text-balance'>
                {item.description}
              </p>
              )
            : (
              <>
                {item.description?.map((description, key) => (
                  <p className='f-body-1 text-muted-foreground mt-spacing-2 text-balance' key={key}>
                    {description}
                  </p>
                ))}
              </>
              )}
        </CardContent>
      </div>
    </Card>
  )
}

import React from 'react'
import NextImage from 'next/image'
import {
  Card,
  CardContent,
  CardHeader,
  type CardDataProps
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ArticleCardProps extends CardDataProps {
  headerClassName?: string
  contentClassName?: string
}

export function ArticleCard ({ className, headerClassName, contentClassName, item, ...props }: ArticleCardProps) {
  return (
    <Card
      as='article'
      className={cn('lg:cols-container bg-transparent border-0 shadow-none p-0', className)}
      {...props}
    >
      <CardContent className={cn('lg:w-1/2-cols lg:flex lg:items-center', contentClassName)}>
        {item.image && (
          <NextImage
            className='w-full h-auto aspect-video rounded-sm'
            loading='lazy'
            {...item.image}
          />
        )}
      </CardContent>
      <CardHeader className={cn('lg:w-1/2-cols mt-spacing-5 lg:mt-0 flex flex-col justify-center', headerClassName)}>
        <h3 className='f-heading-2 font-medium text-balance text-center lg:text-left'>
          <span className='text-gradient'>
            {item.title}
          </span>
        </h3>
        <div className='space-y-spacing-3 text-center lg:text-left'>
          {typeof item.description === 'string'
            ? (
              <p className='f-subhead-2 text-balance'>
                {item.description}
              </p>
              )
            : item.description?.map((paragraph, key) => (
              <p key={key} className='f-subhead-2 text-balance'>
                {paragraph}
              </p>
            ))}
        </div>
      </CardHeader>
    </Card>
  )
}

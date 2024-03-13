import { type Metadata } from 'next'
import { ArticleCard } from '@/components/cards/article-card'
import Hero from '@/components/sections/hero'
import { history, culture } from '@/config/organization'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Conocenos',
  description: culture.title
}

export default function AboutPage () {
  return (
    <>
      <Hero title={culture.title} />
      <section>
        <div className='container'>
          <div className='text-center opacity-0 animate-show [animation-delay:1s]'>
            <h2 className='sr-only'>Nuestra cultura</h2>
            {typeof culture.description === 'string'
              ? (
                <p className='f-heading-2 font-medium text-balancer'>
                  <span className='text-gradient'>
                    {culture.description}
                  </span>
                </p>
                )
              : (
                <div className='mt-spacing-4 text-center space-y-spacing-3'>
                  {culture.description?.map((paragraph, key) => (
                    <p key={key} className='f-heading-2 font-medium text-balance'>
                      <span className='text-gradient'>
                        {paragraph}
                      </span>
                    </p>
                  ))}
                </div>
                )}
          </div>
          <div>
            {culture.items.map((item, key) => (
              <ArticleCard
                key={key}
                item={item}
                className='mt-spacing-7 lg:mt-spacing-9 lg:odd:flex-row-reverse'
                headerClassName={key % 2 === 0 ? '2xl:pr-8' : '2xl:pl-8'}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='container grid place-content-center mt-spacing-7'>
          <h2>
            <span className='f-heading-1 ffont-medium text-balance text-gradient'>
              {history.title}
            </span>
          </h2>
          <div>
            {history.items.map((item, key) => (
              <p key={key} className='mt-spacing-4 f-heading-3 text-balance'>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

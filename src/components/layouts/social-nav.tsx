import NextLink from '@/components/ui/next-link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Icons } from '@/components/icons'
import { capitalize } from '@/lib/utils'
import { type Nav } from '@/types'
import { siteConfig } from '@/config/site'

export const socialIcons = [
  {
    title: 'facebook',
    Icon: () => <Icons.Facebook className='w-7 h-7' />
  },
  {
    title: 'instagram',
    Icon: () => <Icons.Instagram className='w-7 h-7' />
  },
  {
    title: 'tiktok',
    Icon: () => <Icons.Tiktok className='w-7 h-7' />
  },
  {
    title: 'linkedin',
    Icon: () => <Icons.Linkedin className='w-7 h-7' />
  },
  {
    title: 'whatsapp',
    Icon: () => <Icons.Whatsapp className='w-[22px] h-[22px]' />
  }
]

interface SocialNavProps extends Nav {
  action?: () => void
}

const SocialNav = ({ items, action }: SocialNavProps) => {
  return (
    <ul className='flex gap-x-3 items-center'>
      {items.map((socialItem, key) => {
        const socialIcon = socialIcons.find((socialIcon) => socialIcon.title === socialItem.title)
        const socialTitle = capitalize(socialItem.title)

        return (
          <li key={key}>
            <NextLink
              href={socialItem.href}
              onClick={action}
              aria-label={`${socialTitle} - ${siteConfig.name}`}
              target='_blank'
              rel='nooponer noreferrer'
            >
              {socialIcon
                ? <socialIcon.Icon />
                : <ArrowRightIcon className='w-7 h-7' />}
              <span className='sr-only'>{socialTitle}</span>
            </NextLink>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialNav

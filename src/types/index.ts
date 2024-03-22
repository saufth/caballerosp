import { type Author } from 'next/dist/lib/metadata/types/metadata-types'

export interface Title { title: string }

export interface Description {
  description: string | string[]
}

export interface Label {
  label: string
}

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface ImageData {
  image: ImageProps
}

export type Heading = Title & Description

export type HeadingWithOptionalDescription = Title & Partial<Description>

export type HeadingWithImage = Heading & ImageData

export type HeadingWithImageLabel = HeadingWithImage & Partial<Label>

export interface NavItem extends Title {
  href: string
}

export interface Nav {
  items: NavItem[]
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithChildren

export interface Item extends HeadingWithImageLabel {
  slug?: string
}

export type ItemOptional = Omit<Item, 'image' | 'description'> & Partial<ImageData & Description>

export interface Article extends ItemOptional {
  items: string[]
}

export interface Section extends ItemOptional {
  items: ItemOptional[]
}

export type Subcategory = ItemOptional & Partial<Pick<Section, 'items'>>

export interface Category extends ItemOptional {
  items: Subcategory[]
}

export interface SiteConfig {
  name: string,
  description: string,
  url: URL | string,
  author: Author,
  mainNav: MainNavItem[]
}

export type NavItemExternal = Pick<SiteConfig, 'name' | 'url'> & Pick<Item, 'image'>

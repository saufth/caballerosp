'use client'
import { useEffect, useState } from 'react'

export interface Dimensionable {
    width: number
    height: number
}

const useDimensions = (
  node?: HTMLDivElement | null,
  live: boolean = true
) => {
  const [dimensions, setDimensions] = useState<Dimensionable>({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setDimensions(node
        ? { width: node.offsetWidth, height: node.offsetHeight }
        : { width: window.innerWidth, height: window.innerHeight }
      )
    }
    handleResize()
    if (live) {
      window.addEventListener('resize', handleResize)
      return () => { window.removeEventListener('resize', handleResize) }
    }
  }, [node, live])

  return dimensions
}

export default useDimensions

import React from 'react'

export default function useMediaQuery (query: string): boolean {
  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = React.useState<boolean>(getMatches(query))

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  React.useEffect(() => {
    const matchQueryList = window.matchMedia(query)

    handleChange()

    matchQueryList.addEventListener('change', handleChange)
    return () => {
      matchQueryList.removeEventListener('change', handleChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}

import { useEffect } from 'react'

export const useKeyUp: Function = (callback: (event: KeyboardEvent) => void) => {
  const handleKeyUp = (event: KeyboardEvent) => {
    callback(event)
  }

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keyup', handleKeyUp)
    }
  })

  return null
}

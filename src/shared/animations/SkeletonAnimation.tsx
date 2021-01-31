import { keyframes } from 'styled-components'

export const SkeletonAnimation = keyframes`
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
`

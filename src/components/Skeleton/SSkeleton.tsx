import { createElement } from 'react'
import { styled, SkeletonAnimation } from 'shared'

export const SSkeleton = styled(({ tag, children, ...props }) => createElement(tag, props, children))`
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    visibility: ${({ loading }) => (loading ? 'visible' : 'hidden')};
    opacity: ${({ loading }) => (loading ? 1 : 0)};
    transition: opacity 0.53s ease, visibility 0s ${({ loading }) => (loading ? '0' : '0.53s')};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: ${({ theme }) => theme?.skeleton?.background};
    background-size: 400% 100%;
    animation: ${SkeletonAnimation} 5.5s linear infinite;
  }
`

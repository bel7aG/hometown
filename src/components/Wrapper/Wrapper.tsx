import { FC, ReactNode, MutableRefObject } from 'react'
import { useThree } from 'react-three-fiber'

import { SWrapper } from './SWrapper'

export interface WrapperProps {
  children: ReactNode
  portal: MutableRefObject<HTMLElement>
}

const Wrapper: FC<WrapperProps> = ({ children, ...props }) => {
  const { portal } = props

  const { size } = useThree()
  return (
    <SWrapper size={size} portal={portal}>
      <div>{children}</div>
    </SWrapper>
  )
}

export default Wrapper

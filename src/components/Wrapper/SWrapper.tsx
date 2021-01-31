import { styled } from 'shared'
import { Html } from '@react-three/drei'

export const SWrapper = styled(Html)<{ size: any }>`
  position: absolute;
  top: ${({ size }) => -size.height / 2};
  left: ${({ size }) => -size.width / 2};
  width: ${({ size }) => size.width};
  height: ${({ size }) => size.height};
`

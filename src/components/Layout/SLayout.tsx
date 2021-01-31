import { styled } from 'shared'
import { Canvas } from 'react-three-fiber'

export const SLayout = styled.div`
  position: sticky;

  min-width: 28rem;

  &,
  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }
  > div:last-child {
    pointer-events: none;
  }
`

export const SCanvas = styled(Canvas)<{ size: any }>`
  position: absolute;
  top: ${({ size }) => -size.height / 2};
  left: ${({ size }) => -size.width / 2};
  width: ${({ size }) => size.width};
  height: ${({ size }) => size.height};
`

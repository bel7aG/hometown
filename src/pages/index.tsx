import { useRef, RefObject } from 'react'
import { NextPage } from 'next'

import { Wrapper, Block, Shapes } from 'components'

const Home: NextPage = () => {
  const domContent = useRef<any>() as RefObject<any>

  return (
    <>
      <Block factor={0} offset={0}>
        <Wrapper portal={domContent}>
          <div></div>
        </Wrapper>
        <Shapes />
      </Block>
    </>
  )
}

export default Home

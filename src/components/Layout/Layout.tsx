import { useState, useEffect, useRef, FC, ReactNode, RefObject } from 'react'
import { Canvas } from 'react-three-fiber'
import { bel7aGTheme } from 'styled-components'
import { useRouter } from 'next/router'

import { CameraControls } from 'components'
import { blockState } from 'shared'
import { SLayout } from './SLayout'

export interface LayoutProps {
  children: ReactNode
  triggerTheme?: (theme: bel7aGTheme) => void
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [events, setEvents] = useState()
  const scrollArea = useRef<any>() as RefObject<any>
  const onScroll = (e: any) => (blockState.top.current = e.target.scrollTop)
  const x = useRouter()

  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  console.log(x)

  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <SLayout>
      <Canvas
        concurrent
        camera={{ position: [0, 0, 24.75] }}
        onCreated={({ events }) => {
          setEvents(events as any)
        }}>
        <CameraControls />
        {children}
      </Canvas>

      <div ref={scrollArea} onScroll={onScroll} {...events}>
        <div style={{ height: `${blockState.pages * 100}vh` }} />
      </div>
    </SLayout>
  )
}

export default Layout

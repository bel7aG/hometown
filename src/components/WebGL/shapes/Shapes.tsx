import { useState, useEffect, useRef, Suspense, FC, RefObject } from 'react'
import dynamic from 'next/dynamic'
import { useFrame } from 'react-three-fiber'
import { animated, useSpring } from '@react-spring/three'
import * as easings from 'd3-ease'
import Particles from './Particles'

import { Lights } from './'

let isMobile: null | boolean = null

if (typeof window !== 'undefined') isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

const House = dynamic(() => import('./House/House'), { ssr: false })
const Text = dynamic(() => import('./Text'), { ssr: false })

const Shapes: FC = () => {
  const textRef = useRef<any>() as RefObject<any>
  const groupRef = useRef<any>() as RefObject<any>
  const mouse = useRef<any>([0, 0]) as RefObject<any>

  const [active, setActive] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  // Animate model
  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime()
    groupRef.current.rotation.z = -0.2 - (1 + Math.sin(elapsedTime / 1.5)) / 20
    groupRef.current.rotation.x = Math.cos(elapsedTime / 4) / 8
    groupRef.current.position.y = (1 + Math.sin(elapsedTime / 1.5)) / 10
  })

  const { scale: houseScale, pos: housePosition, ...houseSpring } = useSpring({
    scale: active ? [0.4, 0.4, 0.4] : ready ? [1, 1, 1] : [0, 0, 0],
    pos: active ? [0, 1000, 0] : [0, 0, 0],
    config: { duration: 1700, easing: easings.easeCubic }
  })

  const { scale: registerScale, pos: registerPosition } = useSpring({
    scale: active ? [1, 1, 1] : [0, 0, 0],
    pos: active ? [0, 10, 0] : [0, 30, 0],
    config: { duration: 1200, easing: easings.easeCubic }
  })

  return (
    <>
      <animated.group
        scale={houseScale as any}
        position={housePosition as any}
        onPointerDown={() => setActive(!active)}
        ref={groupRef}
        {...houseSpring}>
        <group>
          <Lights />
          <Suspense fallback={null}>
            <group ref={textRef} position={[0, 10, 0]}>
              <Text hAlign="center" position={[0, 1, 0]} children="BELHASSEN" />
              <Text hAlign="right" position={[0, -1, 0]} children="HOUSE" />
            </group>
            <House isActive={active} />
            <Particles count={isMobile ? 5000 : 10000} mouse={mouse} />
          </Suspense>
        </group>
      </animated.group>
      <animated.group scale={registerScale as any} ref={textRef} position={registerPosition as any}>
        <Suspense fallback={null}>
          <Text position={[0, 0, 0]} children="CORONA" color="#ad4a4a" />
        </Suspense>
      </animated.group>
    </>
  )
}

export default Shapes

import { useRef, FC, RefObject } from 'react'
import { useFrame, useThree } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'

export const CameraControls: FC = () => {
  const controls = useRef<any>() as RefObject<any>

  const {
    camera,
    gl: { domElement }
  } = useThree()

  useFrame(() => controls.current.update())

  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 4}
      enableZoom={false}
    />
  )
}

export default CameraControls

import { useMemo, FC } from 'react'
import * as THREE from 'three'
import { useLoader, useUpdate } from 'react-three-fiber'

interface TextProps {
  children: string
  vAlign?: string
  hAlign?: string
  color?: string
  size?: number
  position?: [number, number, number]
}

const Text: FC<TextProps> = ({
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1,
  color = '#ff556b',
  ...props
}) => {
  const font = useLoader(THREE.FontLoader, '/static/bold.blob')

  const config = useMemo(
    () => ({
      font,
      size: 40,
      height: 30,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8
    }),
    [font]
  )
  const mesh = useUpdate(
    (self: any) => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
      self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
      self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
    },
    [children]
  )

  return (
    <group {...props} scale={[0.05 * size, 0.05 * size, 0.05]}>
      <mesh ref={mesh}>
        <textBufferGeometry args={[children, config]} />
        <meshPhongMaterial color={color} />
      </mesh>
    </group>
  )
}

export default Text

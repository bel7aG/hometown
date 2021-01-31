import { FC, useState } from 'react'
import { Object3DNode, useFrame } from 'react-three-fiber'
import { Mesh } from 'three'

import { useWobble } from 'hooks'

const Box: FC<Object3DNode<Mesh, typeof Mesh>> = (props) => {
  const [hovered, set] = useState(false)
  const ref = useWobble(0.5, 'cos')

  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01))

  return (
    <mesh ref={ref} {...props} onPointerOver={() => set(true)} onPointerOut={() => set(false)}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'red'} />
    </mesh>
  )
}

export default Box

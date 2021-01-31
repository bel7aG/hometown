import { createRef } from 'react'
import { IBlockState } from 'interfaces'

export const blockState: IBlockState = {
  sections: 2,
  pages: 3,
  zoom: 1,
  top: createRef()
}

export default blockState

import { FC, ReactNode } from 'react'
import { SSkeleton } from './SSkeleton'

export interface SkeletonProps {
  children?: ReactNode
  loading?: boolean
  tag?: string | ReactNode
  handleClick?: (event?: Event) => void
  className?: string
}

const Skeleton: FC<SkeletonProps> = ({ children, handleClick, tag = 'div', loading = false, className = '' }) => (
  <SSkeleton disabled={loading} tag={tag} loading={Number(loading)} onClick={handleClick} className={className}>
    {children}
  </SSkeleton>
)

export default Skeleton

import { ReactNode, FC } from 'react'
import NextHead from 'next/head'

import { APPLICATION_NAME } from 'shared'

interface HeadProps {
  children?: ReactNode
  pageTitle: string
}

const Head: FC<HeadProps> = ({ children, ...props }) => {
  const { pageTitle } = props

  return (
    <NextHead>
      <title>{`${APPLICATION_NAME} - ${pageTitle} | Todo.`}</title>
      {children}
    </NextHead>
  )
}

export default Head

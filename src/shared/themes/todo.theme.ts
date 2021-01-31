import baseStyled, {
  bel7aGTheme,
  ThemedStyledInterface,
  css as StyledCSS,
  keyframes as frames
} from 'styled-components'

declare module 'styled-components' {
  export interface bel7aGTheme {
    border: {
      wsc: string // width style color
      color: string
      radius: string
    }

    colors: (
      opacity?: number
    ) => {
      primary: string
      secondary: string
    }

    layout: {
      colors: {
        body: string
        header: string
        text: string
        textOpposite: string
      }
    }

    modal: {
      colors: {
        background: string
      }
    }

    skeleton: {
      background: string
    }

    transition: string
  }
}

export const styled = baseStyled as ThemedStyledInterface<bel7aGTheme>
export const css = StyledCSS
export const keyframes: bel7aGTheme | any = frames

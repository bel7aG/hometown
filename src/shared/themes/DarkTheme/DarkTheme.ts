import { bel7aGTheme } from 'styled-components'

export const DarkTheme: bel7aGTheme = {
  border: {
    wsc: `1px solid #6EC1E4`,
    color: '#000',
    radius: '4px'
  },

  colors: (opacity: number = 1) => ({
    primary: `rgba(3, 155, 229, ${opacity})`,
    secondary: `rgba(84, 89, 95, ${opacity})`
  }),

  layout: {
    colors: {
      body: '#272726',
      header: '#161616',
      text: '#fffff',
      textOpposite: '#242424'
    }
  },

  modal: {
    colors: {
      background: '#181818'
    }
  },

  skeleton: {
    background: 'linear-gradient(270deg, #232323 0%, #242424 20%, #222222 40%, #222222 100%);'
  },

  transition: 'cubic-bezier(0.73, 0.12, 0.24, 0.99)'
}

export type DarkTheme = typeof DarkTheme

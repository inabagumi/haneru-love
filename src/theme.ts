export type Theme = {
  breakpoints: {
    lg: number
    md: number
    sm: number
    xl: number
    xs: number
  }
  palette: {
    primary: string
    secondary: string
  }
}

const theme: Theme = {
  breakpoints: {
    lg: 1280,
    md: 960,
    sm: 600,
    xl: 1920,
    xs: 0
  },
  palette: {
    primary: '#f4ae48',
    secondary: '#e85465'
  }
}

export default theme

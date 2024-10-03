import GlobalStyles from "./styles/GlobalStyles"
import {ThemeProvider} from 'styled-components'

import dark from './styles/themes/dark'

import { Dashboard } from "./pages/Dashboard"

export function App() {
  return (

    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Dashboard />
      </ThemeProvider>
  )
}
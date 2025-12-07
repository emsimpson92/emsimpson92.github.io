import { Fragment } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import HomePage from './pages/HomePage'

function App() {
  return (
    <ThemeProvider>
      <Fragment>
        <HomePage />
      </Fragment>
    </ThemeProvider>
  )
}

export default App;
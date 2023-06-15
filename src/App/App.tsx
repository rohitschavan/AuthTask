import React from 'react'
import './App.scss'
import { Button, MantineProvider, Text } from '@mantine/core'
import { theme } from '../styles/Mantine/mantine.theme'
import CustomFonts from '../styles/Mantine/CustomFonts/CustomFonts'

const App = () => {
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={theme}
    >
      <CustomFonts />
      <div className="App">
        <header className="App-header">
          <Button variant="primary">Test</Button>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Text size={'xxl'}>Hello</Text>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </MantineProvider>
  )
}

export default App

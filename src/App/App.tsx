import React from 'react'
import './App.scss'
import { MantineProvider, Text } from '@mantine/core'
import { theme } from '../styles/Mantine/mantine.theme'
import Button from '../common/components/atoms/Button/Button'
import CustomFonts from '../styles/Mantine/CustomFonts/CustomFonts'
import Input from '../common/components/atoms/Input/Input'

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
          <Input
            placeholder="test"
            onChange={(e) => console.log(e.target.value)}
            label="メールアドレス"
          />
          <Button variant="changetoDeliver">Test</Button>
          <Button variant="changetoPackage">Test</Button>
          <Button variant="changetoCancel">Test</Button>
          <Button variant="changetoNotDeliver">Test</Button>

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

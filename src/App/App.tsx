import React from 'react'
import './App.css'
import { Button, MantineProvider, Text } from '@mantine/core'
import { theme } from '../styles/Mantine/mantine.theme'
import CustomFonts from '../styles/Mantine/CustomFonts/CustomFonts'
import Input from '../common/components/atoms/Input/Input'

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <CustomFonts />
      <div className="App">
        <header className="App-header">
          <Input
            placeholder="test"
            onChange={(e) => console.log(e.target.value)}
            label="メールアドレス"
          />
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

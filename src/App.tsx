import { Button, ChakraProvider } from '@chakra-ui/react'
import theme from "./theme/theme"
import React from 'react'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>hoge</p>
    </ChakraProvider>
  )
}

export default App

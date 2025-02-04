import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import StateProvider from './Context/StateProvider.tsx'
import { ChakraProvider,defaultSystem} from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <StateProvider>
        <App />
      </StateProvider>
    </ChakraProvider>

  </StrictMode>



)

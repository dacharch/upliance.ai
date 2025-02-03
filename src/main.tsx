import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import StateProvider from './Context/StateProvider.tsx'


createRoot(document.getElementById('root')!).render(
  
    <StateProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </StateProvider>
  
    
    
  
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ClerkProvider} from '@clerk/clerk-react';


console.log(import.meta)
ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>,
)

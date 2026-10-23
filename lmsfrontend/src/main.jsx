import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiProvider } from './Context/ApiContext.jsx'
import { UserProvider } from './Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
    <ApiProvider>
      <UserProvider>
    <App />
    </UserProvider>
    </ApiProvider>

)

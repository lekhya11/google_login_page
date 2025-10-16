import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import {GoogleOAuthProvider} from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="370205780535-fpmior25m60bkjes1b8kvlg5if5rhqag.apps.googleusercontent.com">
  <StrictMode>
    <App />
  </StrictMode> 
  </GoogleOAuthProvider>
)

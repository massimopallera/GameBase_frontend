import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

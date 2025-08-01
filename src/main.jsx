import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import './responsive.css'
import BackToTop from './components/ui/BackToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BackToTop />
  </React.StrictMode>,
)

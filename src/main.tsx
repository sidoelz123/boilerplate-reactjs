import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { Routes } from '@generouted/react-router'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactDOM } from 'react'
import React from 'react'
import App from './App'

import './index.css'
import 'todomvc-app-css/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

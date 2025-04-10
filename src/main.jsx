import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AnimatedCursor from "react-animated-cursor";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatedCursor
      innerSize={14}
      outerSize={19}
      color='159, 7, 18'
      outerAlpha={0.7}
      innerScale={0.50}
      outerScale={2}/>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Components/Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-6xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  </StrictMode>,
)

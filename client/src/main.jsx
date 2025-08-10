import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Routes/Login.jsx'
import Samsung from './Routes/Samsung.jsx'
import Signup from './Routes/Signup.jsx'
import Iphone from './Routes/Iphone.jsx'
import Nothing from './Routes/Nothing.jsx'
import Oneplus from './Routes/Oneplus.jsx'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <><App /></>,
      errorElement: <div>404 Not Found</div>,
    },
    {
      path: '/login',
      element: <><Login /></>
    },
    {
      path: "/signup",
      element: <><Signup /></>
    },
    {
      path: "/samsung-models",
      element: <><Samsung /> </>
    },
    {
      path: "/iphone-models",
      element: <><Iphone /> </>
    },
    {
      path: "/nothing-models",
      element: <><Nothing /> </>
    },
   {
      path: "/oneplus-models",
      element: <><Oneplus /> </>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

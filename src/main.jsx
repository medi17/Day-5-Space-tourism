import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import Destination from './pages/destination.jsx'
import Crew from './pages/crew.jsx'
import Technology from './pages/technology.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/destination',
    element: <Destination />
  },
  {
    path: '/crew',
    element: <Crew />
  },
  {
    path: '/technology',
    element: <Technology />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

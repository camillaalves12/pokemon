import { createBrowserRouter } from 'react-router-dom'
import Contact from './pages/contact'
import Layout from './components/layout'
import Home from './pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

export default router

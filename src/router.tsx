import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import { SearchProvider } from './components/context/SearchContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SearchProvider>
        <Layout />
      </SearchProvider>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])

export default router

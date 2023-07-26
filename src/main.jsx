import ReactDOM from 'react-dom/client'
import AppLayout from './App'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import Cart from './components/Cart'
import '../index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Lazy Loading for Grocery

const Grocery = lazy(() => import("./components/Grocery"))

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu/>
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading....</h1>}> <Grocery /> </Suspense> 
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter}/>)

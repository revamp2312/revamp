import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Partners from './pages/Partners.jsx'
import Services from './pages/Services.jsx'
import Company from './pages/Company.jsx'
import Error from './pages/Error.jsx'
import ContactUs from './pages/ContactUs.jsx'
import AboutUs from './pages/AboutUs.jsx'


const appRouter=createBrowserRouter([
  {
      path:"/",
      element:<App />,
      children:[
          {
              path:"/",
              element:<Home />,
            
          },

          {
              path:"/partners",
              element:<Partners />,
            
          },

          {
              path:"/services",
              element:<Services />,
            
          },
          {
              path:"/company",
              element:<Company />,
            
          },
          {
              path:"/contact",
              element:<ContactUs />,
            
          },
          {
            path:"/aboutus",
            element:<AboutUs />
          }
      ],
      errorElement:<Error />
      
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={appRouter} />
  </React.StrictMode>,
)



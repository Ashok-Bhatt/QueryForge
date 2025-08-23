import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Documentation, PreviousQnas, Qna, NewQna, PageNotFound, LandingPage } from './Pages/export.js'
import { ThemeProvider } from './Contexts/themeContext.jsx'

const router = createBrowserRouter(
  [
    {
      path : "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <LandingPage/>
        },
        {
          path: "/qna/new",
          element: <NewQna/>,
        },
        {
          path: "/qna/:id",
          element: <Qna/>,
        },
        {
          path: "/previous-qnas",
          element: <PreviousQnas/>,
        },
        {
          path: "/documentation",
          element: <Documentation/>,
        }, 
        {
          path: "*",
          element: <PageNotFound/>
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router}/>
  </ThemeProvider>
)
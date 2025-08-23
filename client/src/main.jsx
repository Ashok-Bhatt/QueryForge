import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Documentation, PreviousQnas, Qna, NewQna, PageNotFound } from './Pages/export.js'
import { ThemeProvider } from './Contexts/themeContext.jsx'

const router = createBrowserRouter(
  [
    {
      path : "/",
      element: <App/>,
      children: [
        {
          path: "/",
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
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Github, { githubInfoLoader } from './components/Github'

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Root />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//     ]
//   }
// ])

// Modern syntax for routing

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Root />}>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/github' element={<Github />} loader={githubInfoLoader}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { Route, Routes } from 'react-router-dom'
import routes from '../src/routes/routes'
import './App.css'
//bootstrap css nd js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import type React from 'react'

interface Route {
  path: string,
  name: string,
  element: React.ReactElement,
  exact: boolean
}

function App() {

  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={route.element}
          // exact={route.exact}
          />
        ))}
      </Routes>

    </>
  )
}

export default App

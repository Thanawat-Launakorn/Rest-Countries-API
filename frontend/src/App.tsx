import './App.css'
import React from 'react'
import {
  BrowserRouter,
  redirect,
  Route,
  Routes,

} from 'react-router-dom'
import ThemeProvider from './contexts/ThemeProvider'
import Layout from './components/Layout'
import Countries from './pages/Countries'


interface IRoute {
  path: string,
  element: React.ReactNode
}

const routes: Array<IRoute> = [
  { path: '/', element: <Countries /> },

]
function App() {

  return (
    <div className='bg-light-background dark:bg-dark-background'>
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              {routes.
                map(({ path, element }) => {
                  return <Route path={path} element={element} />
                })}
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App

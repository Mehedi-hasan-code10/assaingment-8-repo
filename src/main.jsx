import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './root/Root'
import RootError from './root/RootError'
import Home from './pages/Home'
import AllApps from './pages/AllApps'
import AppDetails from './pages/AppDetails'
import MyInstallation from './pages/MyInstallation'
import ErrorPage from './pages/ErrorPage'
import './index.css'


async function appsLoader() {
  const res = await fetch('/data/apps.json')
  if (!res.ok) throw new Response('Failed to load apps', { status: res.status })
  return res.json()
}

async function appByIdLoader({ params }) {
  const res = await fetch('/data/apps.json')
  if (!res.ok) throw new Response('Failed to load apps', { status: res.status })
  const list = await res.json()
  const app = list.find(a => a.id === Number(params.id))
  if (!app) throw new Response('App not found', { status: 404 })
  return app
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RootError />,
    loader: appsLoader,
    children: [
      { index: true, element: <Home />, loader: appsLoader },
      { path: 'apps', element: <AllApps />, loader: appsLoader },
      { path: 'apps/:id', element: <AppDetails />, loader: appByIdLoader },
      
      { path: 'installation', element: <MyInstallation /> },
      { path: '*', element: <ErrorPage /> }
      // 
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

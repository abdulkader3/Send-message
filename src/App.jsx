
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WhatsAppScheduler from './Page/WhatsAppScheduler'

function App() {
  const me = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<WhatsAppScheduler/>}/>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={me}/>
     
    </>
  )
}

export default App

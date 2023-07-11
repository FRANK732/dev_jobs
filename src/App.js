import './App.css';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage';
import ContainerPage from './pages/ContainerPage';
import Detail, { jobsDetailLoader } from './pages/detail'

// Creating routing system using createBrowserRouter from react-router-dom package
const router = createBrowserRouter(
  createRoutesFromElements(
    // Initializing path to the HomePage
    <Route path='/' >
      <Route index element={<HomePage/>}/>
      /* Creating URl detail page with the ID  */
      <Route path=':id' element={<Detail/>} loader={jobsDetailLoader}/>
    </Route>
  )
)

function App() {

  // Return containerPage which contains the NavBar(Darkmode) and the router components using RouterProvider

  return (
    <>
      <ContainerPage />
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

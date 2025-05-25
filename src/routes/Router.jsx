import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,Outlet} from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Careers from '../pages/Careers';
import Support from '../pages/Support';

function Layout(){
    return(
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
       path: "/", element: <Home></Home>
      },
      {
       path: "/about", element: <About></About>
      },
      {
       path: "/support", element: <Support></Support>
      },
    ],
  },
]);

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
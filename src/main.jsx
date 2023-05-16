import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Blog from './pages/Home/Home/Blog';
import App from './App';
import Banner from './Banner/Banner';
import Login from './pages/Home/Home/Login';
import ViewRecipes from './pages/Home/Home/ViewRecipes';
import Register from './pages/Home/Home/Register';
import AuthProvider from './pages/Home/Home/providers/AuthProvider';
import PrivateRoute from './pages/Home/Home/routes/PrivateRoute';
import Contact from './pages/Home/Home/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:'/',
        element:<Banner></Banner>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:`view-recipes`,
        element: <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
        // loader: ({params})=>fetch(`/http://localhost:5000/recipeDetails/${params.recipeId}`)
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      }
      
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
export default router;

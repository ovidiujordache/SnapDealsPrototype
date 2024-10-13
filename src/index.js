import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import AboutUsComponent from './components/AboutUsComponent'


import CategoriesPage from './pages/CategoriesPage'
import { CartProvider } from './ContextProviders/CartContext';

import HomePage from './pages/HomePage'



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>  
  },
  {
    path: "categories",
    element: <CategoriesPage/>
  },

  {
    path: "aboutus",
    element: <AboutUsComponent/>,
  },
]);

createRoot(document.getElementById("root")).render(
 <CartProvider> <RouterProvider router={router} /></CartProvider>
);



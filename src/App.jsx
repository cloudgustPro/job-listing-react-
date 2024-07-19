import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import JobsPage from "./pages/JobsPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path ='/' element={<MainLayout/>}>
  <Route index element={<HomePage />} />
  <Route path = '/jobs' element={<JobsPage />} />
  </Route>
  
)
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

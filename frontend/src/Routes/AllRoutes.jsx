import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import { DoctersDashboard } from "../Pages/DoctersDashboard";
import { Login } from "../Pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { AddBook } from "../Pages/AddDocter";


export const AllRoutes = () => {
  return <div>
    <Routes>
      <Route path='/' element={<DoctersDashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/addbook" element={
        <PrivateRoute>
          <AddBook/>
        </PrivateRoute>
      }/>
    </Routes>
  </div>;
};

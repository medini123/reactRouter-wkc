import React,{useState} from 'react';
import NavBar from './components/NavBar';
import {Outlet} from "react-router";
import Footer from './components/Footer';




function Layout({setSearch, setRating) {

 
    
  return (
    <div>
      <NavBar setRating={setRating} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

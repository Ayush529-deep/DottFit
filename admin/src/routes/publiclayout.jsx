// src/routes/PublicLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BrandPartners from "../pages/BrandPartners";

/**
 * PublicLayout wraps all public routes with Navbar and Footer.
 */
const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <BrandPartners/>
      <Footer />
    </>
  );
};

export default PublicLayout;

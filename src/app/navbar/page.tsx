'use client'
import React, { useState} from "react";
import DesktopNavLinks from "../components/DesktopNav";
import MobileDrawer from "../components/DrawerMobileNav";
import MobileMenuButton from "../components/menuButtonIcon";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative md:absolute ">
      
      <div className="hidden relative items-center z-20 justify-around mx-32 py-16 sm:flex ">
        <DesktopNavLinks />
      </div>
      
      <div className="sm:hidden relative flex flex-row my-4">
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </div>
  );
}
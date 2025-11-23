"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/image-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/Events" },
    { name: "About", path: "/About" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold" style={{ color: "#38BDF8" }}>
            CodingClub
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-black text-lg">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`relative group transition-all duration-300 ${
                pathname === item.path
                  ? "text-sky-500 font-semibold"
                  : "text-black"
              }`}
            >
              {item.name}

              {/* micro underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-sky-500 transition-all duration-300 
                ${
                  pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="flex flex-col p-4 text-black">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`py-3 px-2 rounded-lg transition-all duration-300 ${
                pathname === item.path
                  ? "bg-sky-100 text-sky-600 font-semibold"
                  : "hover:bg-sky-50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

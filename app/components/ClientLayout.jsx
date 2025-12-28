"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Header from "../components/Header";
import Nav from "../components/header_nav";

export default function ClientLayout({ children }) {
  const segment = useSelectedLayoutSegment();

 
  const hideNavbarSegments = [
    null, 
    "login",
    "sign",
    "auth",
  ];

  const hideNavbar = hideNavbarSegments.includes(segment);

  return (
    <>
      {!hideNavbar && (
        <>
          <div className="hidden [@media(min-width:900px)]:block">
            <Header />
          </div>

          <div className="block [@media(min-width:900px)]:hidden sticky top-0 z-9999">
            <Nav />
          </div>
        </>
      )}

      {children}
    </>
  );
}

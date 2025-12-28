"use client";

import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Nav from "../components/header_nav";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const hideNavbar =
    pathname === "/" ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/sign") ||
    pathname.startsWith("/auth") ||
    pathname.startsWith("/codex/edit");

  return (
    <>
      {!hideNavbar && (
        <>
          <div className="hidden [@media(min-width:900px)]:block">
            <Header />
          </div>

          <div className="block [@media(min-width:900px)]:hidden sticky top-0 z-[9999]">
            <Nav />
          </div>
        </>
      )}

      {children}
    </>
  );
}

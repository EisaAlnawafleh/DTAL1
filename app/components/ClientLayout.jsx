"use client";

import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Nav from "../components/header_nav";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const hideNavbarRoutes = ["/login", "/sign", "/codex/edit","/auth"];
  const hideNavbar = hideNavbarRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!hideNavbar && (
        <>
          <div className="hidden [@media(min-width:900px)]:block">
            <Header />
          </div>

          <div className="block [@media(min-width:900px)]:hidden sticky top-0 z-[9999]">
            <Nav className={``} />
          </div>
        </>
      )}

      {children}
    </>
  );
}

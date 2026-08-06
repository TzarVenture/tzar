"use client";

import { usePathname } from "next/navigation";
import Header from "./componants/Header/Header";
import SiteFooter from "./componants/FooterSection/SiteFooter";
import { Image } from "react-bootstrap";
import Whatsapp from "../assets/images/icons/whatsapp.png";

export default function HeaderFooterWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <SiteFooter />
      <div className="whatsapp">
        <a href="https://api.whatsapp.com/send?phone=7304056607">
          <Image src={Whatsapp.src} alt="whatsapp" width="50" />
        </a>
      </div>
    </>
  );
}

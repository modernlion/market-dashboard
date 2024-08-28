import Image from "next/image";
import React from "react";
import "@/styles//common/navbar.scss";
import Link from "next/link";

function Navbar() {
  const menuList = [
    {
      label: "login",
    },
    {
      label: "collection",
    },
  ];

  return (
    <nav className="navbar">
      {/* <Image src={"/nextLogo.png"} alt="logo" width={100} height={30} /> */}
      <ul>
        {menuList.map(({ label }, idx) => (
          <Link href={`/${label}`} key={`menu-${label}-${idx}`}>
            <li>{label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

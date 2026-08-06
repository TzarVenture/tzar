"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavItem = ({ item }) => {
  const { name, href, subNavItems = [] } = item;
  const [open, setOpen] = useState(false);

  const hasDropdown = subNavItems.length > 0;

  return (
    <li
      style={{
        listStyle: "none",
        padding: "10px 0",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      {/* MAIN MENU ITEM */}
      <div
        onClick={() => hasDropdown && setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 15px",
          cursor: "pointer",
        }}
      >
        <Link
          href={href}
          style={{
            flex: 1,
            textDecoration: "none",
            color: "#D4AF37",
            fontSize: "16px",
          }}
        >
          {name}
        </Link>

        {/* ARROW ONLY IF SUBMENU EXISTS */}
        {hasDropdown && (
          <span style={{ color: "#D4AF37", fontSize: "14px" }}>
            {open ? "▲" : "▼"}
          </span>
        )}
      </div>

      {/* SUBMENU */}
      {hasDropdown && (
        <ul
          style={{
            display: open ? "block" : "none",
            padding: "5px 0 10px 30px",
            background: "rgba(255,255,255,0.08)",
          }}
        >
          {subNavItems.map((sub) => (
            <li key={sub.id} style={{ listStyle: "none" }}>
              <Link
                href={sub.href}
                style={{
                  display: "block",
                  padding: "6px 0",
                  color: "#D4AF37",
                  textDecoration: "none",
                }}
              >
                {sub.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;

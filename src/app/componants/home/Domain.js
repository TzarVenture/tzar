"use client";
import Image from "next/image";
import automobile from "@/assets/images/icons/Artboard 1.png";
import capital from "@/assets/images/icons/Artboard 2.png";
import consulting from "@/assets/images/icons/Artboard 3.png";
import ecommerce from "@/assets/images/icons/Artboard 4.png";
import education from "@/assets/images/icons/Artboard 5.png";
import energy from "@/assets/images/icons/Artboard 6.png";
import events from "@/assets/images/icons/Artboard 7.png";
import food from "@/assets/images/icons/Artboard 8.png";
import hardware from "@/assets/images/icons/Artboard 9.png";
import healthcare from "@/assets/images/icons/Artboard 10.png";
import hospitality from "@/assets/images/icons/Artboard 11.png";
import industries from "@/assets/images/icons/Artboard 12.png";

export default function DomainsWorked() {
  const items = [
  { title: "Automobiles", icon: automobile },
  { title: "Capital", icon: capital },
  { title: "Consulting", icon: consulting },
  { title: "E-Commerce", icon: ecommerce },
  { title: "Education", icon: education },
  { title: "Energy", icon: energy },
  { title: "Events", icon: events },
  { title: "Food", icon: food },
  { title: "Hardware", icon: hardware },
  { title: "Healthcare", icon: healthcare },
  { title: "Hospitality", icon: hospitality },
  { title: "Industries", icon: industries },
];

  return (
    <section style={{ padding: "60px 0" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "34px",
          fontWeight: "700",
          marginBottom: "40px",
          color: "#1D4224"
        }}
      >
        Domains we have worked for.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "40px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={60}
              height={60}
              style={{ marginBottom: "10px" }}
            />
            <p style={{ fontSize: "16px", fontWeight: "500" }}>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

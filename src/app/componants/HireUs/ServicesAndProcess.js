"use client";
import { Container, Row, Col } from "react-bootstrap";
import {
   Globe,
  Search,
  Palette,
  Share2,
  PenTool,
  Box,
} from "lucide-react";

const services = [
  {
    icon: <Globe size={22} strokeWidth={1.8} />,
    title: "Website Development",
    desc: "Build fast, secure, and scalable websites tailored to your business goals and user experience.",
  },
  {
    icon: <Search size={22} strokeWidth={1.8} />,
    title: "SEO & Search",
    desc: "Boost your visibility with data-driven SEO strategies that increase rankings, traffic, and conversions.",
  },
  {
    icon: <Palette size={22} strokeWidth={1.8} />,
    title: "Graphic Designing",
    desc: "Create visually compelling designs that strengthen your brand identity and capture audience attention.",
  },
  {
    icon: <Share2 size={22} strokeWidth={1.8} />,
    title: "Social Media Marketing (SMM)",
    desc: "Grow your brand presence and engagement with strategic content and performance-driven social campaigns.",
  },
  {
    icon: <PenTool size={22} strokeWidth={1.8} />,
    title: "Logo Design",
    desc: "Craft unique and memorable logos that reflect your brand’s vision and leave a lasting impression.",
  },
  {
    icon: <Box size={22} strokeWidth={1.8} />,
    title: "Product & Packaging Design",
    desc: "Innovative product and packaging designs that elevate brand value and stand out on shelves.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "Deep dive into your business, audience, and goals to craft the perfect strategy.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Data-driven roadmap designed to achieve measurable results and ROI.",
  },
  {
    step: "03",
    title: "Execute",
    desc: "Flawless implementation with continuous optimization and A/B testing.",
  },
  {
    step: "04",
    title: "Scale",
    desc: "Amplify what works, refine what doesn’t, and accelerate your growth.",
  },
];

export default function ServicesAndProcess() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "100px 0",
        color: "#003366",
      }}
    >
      <Container>
        {/* SERVICES */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 42, fontWeight: 700 }}>
            Services That{" "}
            <span style={{ color: "#000" }}>Drive Growth</span>
          </h2>
          <p
            style={{
              color: "#9ca3af",
              maxWidth: 600,
              margin: "10px auto 0",
            }}
          >
            Full-stack digital marketing solutions tailored to your business goals
          </p>
        </div>

        <Row className="g-4" style={{ marginBottom: 80 }}>
          {services.map((item, i) => (
            <Col lg={4} md={6} key={i}>
              <div
                style={{
                  background: "#EFE8E0",
                  border: "1px solid #003108",
                  borderRadius: 16,
                  padding: 28,
                  height: "100%",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#003108",
                    marginBottom: 16,
                  }}
                >
                  {item.icon}
                </div>

                <h5 style={{ fontSize: 18, marginBottom: 8, color: "#003108" }}>
                  {item.title}
                </h5>
                <p style={{ color: "#003108", fontSize: 14 }}>
                  {item.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* PROCESS */}
        <Row className="align-items-center">
          <Col lg={6}>
            <h2 style={{ fontSize: 42, fontWeight: 700 }}>
              Our Proven <span style={{ color: "#003108" }}>Process</span>
            </h2>
            <p
              style={{
                color: "#003108",
                maxWidth: 520,
                marginTop: 10,
              }}
            >
              We follow a strategic, results-driven process designed to deliver consistency, clarity, and measurable growth. From understanding your business to scaling performance, every step is built to maximize impact and long-term success.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 20,
              }}
            >
              {["Google Partner", "Meta Business Partner"].map(
                (badge, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#003108",
                      border: "1px solid #003108",
                      padding: "6px 14px",
                      borderRadius: 999,
                      fontSize: 13,
                      color: "#fff",
                    }}
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </Col>

          <Col lg={6}>
            {process.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 20,
                  background: "#fff",
                  border: "1px solid #003108",
                  borderRadius: 16,
                  padding: 24,
                  marginBottom: 18,
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#003108",
                  }}
                >
                  {item.step}
                </div>

                <div>
                  <h5 style={{ marginBottom: 6, color: "#003108" }}>{item.title}</h5>
                  <p style={{ color: "#003108", fontSize: 14 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

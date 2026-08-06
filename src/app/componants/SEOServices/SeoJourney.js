import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import icon1 from "@/assets/images/icons/sale-report.png";
import icon2 from "@/assets/images/icons/analytics.png";
import icon3 from "@/assets/images/icons/keyword-analysis.png";
import icon4 from "@/assets/images/icons/competitors.png";
import icon5 from "@/assets/images/icons/seo-1.png";
import icon6 from "@/assets/images/icons/link-building.png";
import icon7 from "@/assets/images/icons/content-writing.png";
import icon8 from "@/assets/images/icons/statistics.png";

function SeoJournery() {
  const cardStyle = {
    height: '100%',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '12px',
    textAlign: 'center',
    minHeight: '300px',
    // boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    marginBottom: '20px',
  };

  const badgeStyle = {
    backgroundColor: '#1D4224',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const iconWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const iconStyle = {
    width: '60px',
    height: 'auto',
  };

  const headingStyle = {
    fontSize: '18px',
    fontWeight: '600',
  };

  const paraStyle = {
    fontSize: '14px',
    color: '#333',
  };

  const sectionHeadingStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '24px',
    fontWeight: '600',
  };

  const columnClass = 'col-lg-3 col-md-3 col-sm-6 col-12';

  const steps = [
    {
      badge: "Step 01",
      icon: icon1.src,
      title: "Website Audit",
      description: "Unlock your competitive edge and enhance your online presence with our thorough website audit services.",
    },
    {
      badge: "Step 02",
      icon: icon2.src,
      title: "Competitor Analysis",
      description: "Discover insights into your competitors' online strategies and potential opportunities.",
    },
    {
      badge: "Step 03",
      icon: icon3.src,
      title: "Keyword Research",
      description: "Our skilled team performs thorough analysis to find the most relevant and high-performing keywords.",
    },
    {
      badge: "Step 04",
      icon: icon4.src,
      title: "Competitor Benchmarking",
      description: "Boost your business to new levels with our custom competitor benchmarking solutions.",
    },
    {
      badge: "Step 05",
      icon: icon5.src,
      title: "On-Page Optimisation",
      description: "Boost your site's visibility and attract targeted traffic with our on-page optimization services, ensuring efficient Google crawling.",
    },
    {
      badge: "Step 06",
      icon: icon6.src,
      title: "Link Building",
      description: "Our skilled team uses proven methods to gain high-quality backlinks from top websites in your niche.",
    },
    {
      badge: "Step 07",
      icon: icon7.src,
      title: "Content Writing",
      description: "Top-notch content crafted and published online to create quality backlinks.",
    },
    {
      badge: "Step 08",
      icon: icon8.src,
      title: "Performance Reports",
      description: "Get actionable insights into your digital performance and monitor key metrics with our detailed performance reports.",
    },
  ];

  return (
    <section style={{ padding: '40px 0', backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div>
          <h2 style={sectionHeadingStyle}>Optimizing for Search Engines: The Journey Unveiled</h2>
        </div>
        <div className="row">
          {steps.map((step, index) => (
            <div className={columnClass} key={index}>
              <div style={cardStyle}>
                <span style={badgeStyle}>{step.badge}</span>
                <div style={iconWrapperStyle}>
                  <Image src={step.icon} alt={step.title} style={iconStyle} />
                </div>
                <h3 style={headingStyle}>{step.title}</h3>
                <p style={paraStyle}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeoJournery;

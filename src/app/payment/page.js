"use client";
import { useState } from "react";
import services from "./services";
import "./Payment.css";
import Script from "next/script";

export default function PaymentPage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [address, setAddress] = useState("");   // ✅ Address field
  const [manualAmount, setManualAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [invoiceUrl, setInvoiceUrl] = useState("");

  // Web Development Plan
  const [webPlan, setWebPlan] = useState("");

  // T&C Consent
  const [tcAccepted, setTcAccepted] = useState(false);

  const toggleService = (service) => {
    setSelected((prev) =>
      prev.find((s) => s.id === service.id)
        ? prev.filter((s) => s.id !== service.id)
        : [...prev, service]
    );

    if (service.title.toLowerCase().includes("web")) {
      if (selected.find((s) => s.id === service.id)) {
        setWebPlan("");
        setTcAccepted(false);
      }
    }
  };

  const isWebDevSelected = selected.some((s) =>
    s.title.toLowerCase().includes("web")
  );

  // GST Calculations
  const baseAmount = Number(manualAmount || 0);
  const gstAmount = Math.round(baseAmount * 0.18);
  const finalAmount = baseAmount + gstAmount;

  // PAYMENT
  const handlePayment = async () => {
    if (!name || !email || !address) {
      alert("Please enter name, email and billing address");
      return;
    }

    if (isWebDevSelected && !webPlan) {
      alert("Please select a Web Development plan");
      return;
    }

    if (isWebDevSelected && !tcAccepted) {
      alert("Please accept Terms & Conditions");
      return;
    }

    if (!baseAmount || baseAmount < 1) {
      alert("Please enter a valid amount");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmount,
          baseAmount,
          gstAmount,
          gstNumber,
          services: selected.map((s) => s.title),
          webPlan,
          address, // ✅ send address
        }),
      });

      const data = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: data.amount,
        currency: "INR",
        name: "Your Company Name",
        description: "Service Payment",
        order_id: data.orderId,

        handler: async function (response) {
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,

                customerName: name,
                company,
                customerEmail: email,
                gstNumber,
                address, // ✅ send address
                baseAmount,
                gstAmount,
                amount: finalAmount,
                services: selected.map((s) => s.title),
                webPlan,
              }),
            });

            const result = await verifyRes.json();

            if (result.success) {
              setInvoiceUrl(result.invoiceUrl);
              setPaymentSuccess(true);
            } else {
              alert("Payment verification failed");
            }
          } catch (err) {
            console.error(err);
            alert("Payment completed but verification failed");
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: () => setLoading(false),
        },

        theme: { color: "#003366" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
      setLoading(false);
    }
  };

  // THANK YOU PAGE
 if (paymentSuccess) {
  return (
    <div className="thankyou-page">
      <div className="thankyou-card">
        <h1>🎉 Payment Successful!</h1>
        <p>Your invoice has been sent to your email.</p>

        <div className="thankyou-actions">
          <a
            href={invoiceUrl}
            target="_blank"
            className="download-btn"
          >
            Download Invoice PDF
          </a>

          <button
            className="secondary-btn"
            onClick={() => window.location.reload()}
          >
            Make Another Payment
          </button>
        </div>
      </div>
    </div>
  );
}




  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="checkout-page">
        <section className="checkout-hero">
  <div className="hero-badge">Trusted by millions worldwide</div>

  <h1 className="hero-title">
    Seamless Payments, Limitless <br />
    <span>Possibilities</span>
  </h1>

  <p className="hero-subtitle">
    Experience the future of digital transactions with our secure,
    lightning-fast payment gateway that powers businesses across the globe.
  </p>

  {/* Floating Icons */}
  {/* <div className="floating-icon icon-1">💳</div>
  <div className="floating-icon icon-2">⚡</div>
  <div className="floating-icon icon-3">🔒</div>
  <div className="floating-icon icon-4">🌐</div>
  <div className="floating-icon icon-5">🏦</div> */}
</section>

        <h1 className="checkout-title">Checkout</h1>
        <p className="checkout-subtitle">Select your services and continue</p>

        <div className="checkout-steps">
          <div className={`step ${step >= 1 ? "active" : ""}`}>1 Services</div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>2 Details</div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>3 Payment</div>
        </div>

        <div className="checkout-card">

          {/* STEP 1 - SERVICES */}
          {step === 1 && (
            <div className="services-section">
              <h2>Select Services</h2>

              <div className="services-grid">
                {services.map((service) => {
                  const isSelected = selected.find((s) => s.id === service.id);
                  const isWebService = service.title.toLowerCase().includes("web");

                  return (
                    <div key={service.id} className="service-wrapper">
                      <div
                        className={`service-card ${isSelected ? "selected" : ""}`}
                        onClick={() => toggleService(service)}
                      >
                        <h4>{service.title}</h4>
                        <p>{service.desc}</p>
                      </div>

                      {isSelected && isWebService && (
                        <div className="web-plan-box">
                          <label>Select Web Development Plan</label>
                          <select
                            value={webPlan}
                            onChange={(e) => setWebPlan(e.target.value)}
                            className="web-plan-dropdown"
                          >
                            <option value="">Choose a plan</option>
                            <option value="Wordpress">Wordpress</option>
                            <option value="Shopify">Shopify</option>
                            <option value="React">React</option>
                            <option value="Landing Page">Landing Page</option>
                            <option value="Other">Other</option>
                          </select>

                          <div className="tc-wrapper">
  <label className="tc-consent">
    <input
      type="checkbox"
      checked={tcAccepted}
      onChange={(e) => setTcAccepted(e.target.checked)}
    />
    <span>
      I agree that{" "}
      <a href="/terms-and-conditions" target="_blank">
        T & C
      </a>{" "}
      applies.
    </span>
  </label>
</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2 - DETAILS */}
          {step === 2 && (
  <div className="summary-section">
    <h3>Your Details</h3>

    <div className="form-grid">
      <div>
        <label>Full Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label>Company Name</label>
        <input value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>

      <div>
        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Billing Address</label>
        <textarea
          rows="3"
          placeholder="Enter full billing address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div>
        <label>GST Number</label>
        <input
          placeholder="Enter GST number"
          value={gstNumber}
          onChange={(e) => setGstNumber(e.target.value.toUpperCase())}
        />
      </div>

      <div>
        <label>Enter Amount (₹)</label>
        <input
          type="number"
          min="1"
          value={manualAmount}
          onChange={(e) => setManualAmount(e.target.value)}
        />
      </div>
    </div>
  </div>
)}


          {/* STEP 3 - SUMMARY */}
          {step === 3 && (
            <div className="order-summary">
              <h3>Order Summary</h3>

              {selected.map((s) => (
                <div className="summary-row" key={s.id}>
                  <span>{s.title}</span>
                </div>
              ))}

              {webPlan && (
                <div className="summary-row">
                  <span>Web Development Plan</span>
                  <strong>{webPlan}</strong>
                </div>
              )}

              <div className="summary-row">
                <span>Base Amount</span>
                <strong>₹{baseAmount}</strong>
              </div>

              <div className="summary-row">
                <span>GST (18%)</span>
                <strong>₹{gstAmount}</strong>
              </div>

              <div className="summary-divider" />

              <div className="total-row">
                <span>Total Payable</span>
                <span className="total-amount">₹{finalAmount}</span>
              </div>

              <div className="billing-box">
                <p>Billing to:</p>
                <strong>{name}</strong>
                {company && <div>{company}</div>}
                {address && <div>{address}</div>}
                <div>{email}</div>
                {gstNumber && <div>GST: {gstNumber}</div>}
              </div>
            </div>
          )}

          {/* FOOTER */}
          <div className="card-footer">
            {step > 1 ? (
              <button className="back-inline" onClick={() => setStep(step - 1)}>
                ← Back
              </button>
            ) : (
              <div />
            )}

            {step < 3 && (
              <button
                className="continue-btn"
                onClick={() => setStep(step + 1)}
                disabled={
                  selected.length === 0 ||
                  (isWebDevSelected && (!webPlan || !tcAccepted))
                }
              >
                Continue →
              </button>
            )}

            {step === 3 && (
              <button
                className="pay-btn"
                onClick={handlePayment}
                disabled={loading || (isWebDevSelected && !tcAccepted)}
              >
                {loading ? "Processing..." : `Pay ₹${finalAmount}`}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}













// "use client";
// import { useState } from "react";
// import services from "./services";
// import "./Payment.css";

// export default function PaymentPage() {
//   const [selected, setSelected] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [manualAmount, setManualAmount] = useState("");
//   const [showAmountBox, setShowAmountBox] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [invoiceUrl, setInvoiceUrl] = useState("");

//   const toggleService = (service) => {
//     setSelected((prev) =>
//       prev.find((s) => s.id === service.id)
//         ? prev.filter((s) => s.id !== service.id)
//         : [...prev, service]
//     );
//   };

//   const startPayment = async () => {
//     if (!name || !email) {
//       alert("Please enter name and email");
//       return;
//     }

//     const amount = Number(manualAmount);
//     if (!amount || amount < 1) {
//       alert("Please enter a valid amount (₹1 minimum)");
//       return;
//     }

//     if (!window.Razorpay) {
//       alert("Razorpay SDK not loaded");
//       return;
//     }

//     setLoading(true);

//     // 1️⃣ Create order
//     const res = await fetch("/api/razorpay", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         amount,
//         services: selected.map((s) => s.title),
//       }),
//     });

//     const data = await res.json();

//     // 2️⃣ Razorpay options
//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
//       amount: data.amount,
//       currency: "INR",
//       name: "Your Company",
//       description: "Service Payment",
//       order_id: data.orderId,

//       handler: async function (response) {
//         try {
//           // 3️⃣ Verify payment + invoice + email
//           const verifyRes = await fetch("/api/verify-payment", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,

//               customerName: name,
//               customerEmail: email,
//               amount,
//               services: selected.map((s) => s.title),
//             }),
//           });

//           const result = await verifyRes.json();

//           if (result.success) {
//             setInvoiceUrl(result.invoiceUrl);
//             alert("Payment successful! Invoice sent to email.");
//           } else {
//             alert("Payment verification failed");
//           }
//         } catch (err) {
//           console.error(err);
//           alert("Something went wrong after payment");
//         } finally {
//           setLoading(false);
//         }
//       },

//       modal: {
//         ondismiss: () => setLoading(false),
//       },

//       theme: { color: "#003366" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
// <>
// <section className="hero">
//   <div className="hero-content">
//     <span className="hero-badge">Premium Digital Solutions</span>

//     <h1 className="hero-title">
//       Transform Your <br />
//       Business with <span>Expert Services</span>
//     </h1>

//     <p className="hero-desc">
//       Select the services you need and we'll handle the rest.
//       Mix and match to create your perfect solution tailored to your goals.
//     </p>
//   </div>

//   <div className="hero-visual">
//     {/* <img
//       src="/hero-banner.png"
//       alt="Digital Solutions Illustration"
//     /> */}
//   </div>
// </section>
   
//     <div className="payment-container">
//       {/* LEFT */}
//       <div>
//         <h1>
//           Choose Your <span>Services</span>
//         </h1>
//         <p>Select the services you need and proceed to payment.</p>

//         <div className="services-grid">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className={`service-card ${
//                 selected.find((s) => s.id === service.id) ? "active" : ""
//               }`}
//               onClick={() => toggleService(service)}
//             >
//               <h3>{service.title}</h3>
//               <ul>
//                 {service.points.map((p, i) => (
//                   <li key={i}>✔ {p}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="right">
//         <h3>Selected Services</h3>

//         {selected.length === 0 && <p>No service selected</p>}

//         {selected.map((s) => (
//           <div key={s.id} className="selected-item">
//             {s.title}
//           </div>
//         ))}

//         {/* NAME & EMAIL */}
//         <div className="input-box">
//           <label>Full Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <label>Email Address</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         {!showAmountBox && (
//           <button
//             onClick={() => {
//               if (!name || !email) {
//                 alert("Please enter name and email");
//                 return;
//               }
//               if (selected.length === 0) {
//                 alert("Select at least one service");
//                 return;
//               }
//               setShowAmountBox(true);
//             }}
//           >
//             Proceed to Payment
//           </button>
//         )}

//         {showAmountBox && (
//           <div className="amount-box">
//             <p>Enter amount to pay (₹)</p>
//             <input
//               type="number"
//               min="1"
//               placeholder="Enter amount"
//               value={manualAmount}
//               onChange={(e) => setManualAmount(e.target.value)}
//             />

//             <button onClick={startPayment} disabled={loading}>
//               {loading ? "Processing..." : `Pay ₹${manualAmount || 0}`}
//             </button>
//           </div>
//         )}

//         {/* DOWNLOAD INVOICE */}
//         {invoiceUrl && (
//           <a
//             href={invoiceUrl}
//             target="_blank"
//             download
//             className="download-btn"
//           >
//             Download Invoice (PDF)
//           </a>
//         )}
//       </div>
//     </div>
//      </>
//   );
// }

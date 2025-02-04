// import React from "react";
// import "../styles/landing.css";
// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const nav = useNavigate();
  
//   const handlePay = () => {
//     nav("/payment");
//   };

//   return (
//     <div className="landing">
//       <header className="hero">
//         <div className="head">
//           <img src="/img/landingpage.png" alt="Landing Page" className="landimg" />
//           <div className="hero-content">
//             <h1>Boost Your Brand Visibility & Reach New Heights</h1>
//             <p>With Our Expertise</p>
//           </div>
//         </div>

//         <div className="hero-button">
//           <button>Schedule a Consultation</button>
//         </div>
//       </header>

//       <section className="services">
//         <h2>What Services Are We Offering</h2>
//         <ul>
//           <li>Personal Branding</li>
//           <li>Online Management</li>
//           <li>Reputation Management</li>
//           <li>Influencer Building</li>
//         </ul>
//         <button onClick={handlePay}>Make a Payment</button>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;


import "../styles/landing.css";
// import { useState, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [showForm, setShowForm] = useState(false);

  const handlePay = () => {
    nav("/payment");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      alert(data.message);
      if (data.success) {
        setShowForm(false);
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Error scheduling consultation:", error);
      alert("Failed to schedule consultation.");
    }
  };


  return (
    <div className="landing">
      <header className="hero">
        <div className="head">
          <img src="/img/landingpage.png" alt="Landing Page" className="landimg" />
          <div className="hero-content">
            <h1>Boost Your Brand Visibility & Reach New Heights</h1>
            <p>With Our Expertise</p>
          </div>
        </div>

        <div className="hero-button">
          <button onClick={() => setShowForm(true)}>Schedule a Consultation</button>
        </div>
      </header>

      

      {showForm && (
        <div className="consultation-form">
          <h2>Schedule a Consultation</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Your Phone Number" value={form.phone} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required></textarea>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Close</button>
          </form>
        </div>
      )}

      <section className="services">
        <h2>What Services Are We Offering</h2>
        <ul>
          <li>Personal Branding</li>
          <li>Online Management</li>
          <li>Reputation Management</li>
          <li>Influencer Building</li>
        </ul>
        <button onClick={handlePay}>Make a Payment</button>
      </section>

    </div>
  );
};

export default LandingPage;

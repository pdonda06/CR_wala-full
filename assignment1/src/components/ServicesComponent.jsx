import "../styles/services.css";

const ServicesComponent = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">We provide top-notch solutions for your brand.</p>

      <div className="services-grid">
        <div className="service-card">
          <img src="/img/service1.jpg" alt="Service 1" className="service-img" />
          <h3>Personal Branding</h3>
          <p>We help build your brand identity through storytelling and strategy.</p>
        </div>
        <div className="service-card">
          <img src="/img/service2.jpg" alt="Service 2" className="service-img" />
          <h3>Reputation Management</h3>
          <p>Maintain a positive online reputation with our expert strategies.</p>
        </div>
        <div className="service-card">
          <img src="/img/service3.jpg" alt="Service 3" className="service-img" />
          <h3>Social Media Growth</h3>
          <p>Boost engagement and audience reach with targeted social media campaigns.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;

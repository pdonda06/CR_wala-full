import { useEffect, useState } from "react";
import "../styles/testimonial.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/testimonials');
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Testimonials</h2>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="testimonial-card">
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-user">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-img" />
              <div className="testimonial-info">
                <p className="testimonial-name">{testimonial.name}</p>
                <span className="testimonial-role">{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
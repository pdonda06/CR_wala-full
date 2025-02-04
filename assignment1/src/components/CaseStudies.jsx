import { useEffect, useState } from "react";
import "../styles/casestudies.css";

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const response = await fetch('/api/case-studies');
      const data = await response.json();
      setCaseStudies(data);
    } catch (error) {
      console.error('Error fetching case studies:', error);
    }
  };

  return (
    <section className="case-studies">
      <h2 className="case-title">Case Studies</h2>
      <p className="case-subtitle">Reel Result, Real Stories</p>

      <div className="case-grid">
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy._id} className="case-card">
            <img src={caseStudy.imageUrl} alt={caseStudy.title} className="case-img" />
            <div className="case-info">
              <p className="case-text">{caseStudy.description}</p>
              <span className="case-tag">{caseStudy.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button className="case-button">View More</button>
      </div>
    </section>
  );
};

export default CaseStudies;
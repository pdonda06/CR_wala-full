import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-logo">
          <img src="/logo-placeholder.png" alt="CR Wala Logo" />
        </div>

       
        <div className="footer-right">
          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="social-icons">
              <img src="/img/facebook.png" alt="Facebook" />
              <img src="img/twitter.png" alt="Twitter" />
              <img src="/img/telegram.png" alt="Telegram" />
            </div>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe</h3>
            <p>Subscribe to stay tuned for new web design and latest updates. Let’s do it!</p>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

     
      <div className="footer-links">
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Landing Page</a></li>
            <li><a href="#">Popup Builder</a></li>
            <li><a href="#">Web-design</a></li>
            <li><a href="#">Content</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Use Cases</h4>
          <ul>
            <li><a href="#">Web-designers</a></li>
            <li><a href="#">Marketers</a></li>
            <li><a href="#">Small Business</a></li>
            <li><a href="#">Website Builder</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Academy</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Themes</a></li>
            <li><a href="#">Hosting</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

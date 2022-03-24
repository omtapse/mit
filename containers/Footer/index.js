import FooterStyleWrapper from "./Footer.style";
const Footer = () => {
  return (
    <FooterStyleWrapper>
      <div className="footer-section">
        <div className="about-section">
          <h3>About us</h3>
          <p>
            MITAOE is aimed to create and maintain a safe, healthy, and
            conducive environment and culture that synthesizes the intellectual,
            technical, physical, social, emotional, and ethical development of
            students in a holistic way.
          </p>
        </div>
        <div className="Our-mission">
          <h3>Our Mission</h3>
          <p>
          " Young and innovative talent will share and demonstrate their expertise "
          </p>
        </div>
        <div className="quick-links">
          <h3>Explore</h3>
          <a className=" link" href="/Projects">
          About Equilibrium
          </a>
          <a className=" link" href="/Projects">
            Events
          </a>
          <a className=" link" href="/Achievements">
            News
          </a>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default Footer;

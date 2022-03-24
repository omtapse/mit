import AboutStyleWrapper from "./About.style";
import Navbar from "../../containers/Navbar/Navbar";
import Footer from '../../containers/Footer/index'
const About = () => {
  return (
    <AboutStyleWrapper>
      <Navbar />
      <div className="About-section">
        <div className="head">
          <div className="text">
            <p>Equilibrium-21</p>
          </div>
        </div>
        <div className="brocher-image">
          <img
            src="/about/brocher.jpg"
            id="brocherimg1"
            className="brocherimg"
          />
          <img
            src="/about/brocher-2.jpg"
            id="brocherimg2"
            className="brocherimg"
          />
        </div>
        <div className="QandA">
          <div className="accordian">
            <div className="accordian-item" id="que1">
              <a className="accordian-link" id="que1">
                Equilibrium: When and Where and For whom?
                <img
                  style={{ width: "30px" }}
                  src="/icons/plus-solid.svg"
                  className="plus"
                />
                <img
                  style={{ width: "30px" }}
                  src="/icons/minus-solid.svg"
                  className="Minus"
                />
              </a>
              <div className="answer">
                <p>
                  This time, considering the unprecedented circumstances of the
                  COVID-19 pandemic, Equilibrium will be organized virtually
                  during 16-17th March 2021. Equilibrium is targeting young and
                  creative brains from the field of Engineering, Technology,
                  Management and Science across India. The Age group from 16
                  years 25 years can participate in it.
                </p>
              </div>
            </div>
            <div className="accordian-item" id="que2">
              <a className="accordian-link" id="que2">
                What is in Equilibrium?
                <img
                  style={{ width: "30px", color: "white" }}
                  src="/icons/plus-solid.svg"
                  className="plus"
                />
                <img
                  style={{ width: "30px" }}
                  src="/icons/minus-solid.svg"
                  className="Minus"
                />
              </a>
              <div className="answer">
                <p>
                  Equilibrium will witness more than 10 competitions and events
                  conducted in the emerging and cutting-edge technologies in the
                  fields of Robotics and Automation, Augmented and Virtual
                  Reality, Internet of things, Artificial Intelligence, Data
                  Science, Aerial Vehicle, Automotive vehicle, Mobile and Web
                  App Development, Product Development and so on. The Platform
                  of Equilibrium will provide ample opportunities to remarkable
                  performers in terms of attractive prizes, national
                  recognitions, and Internship and placement opportunities into
                  the respective domains, Sponsored projects from industry and
                  swags from professional bodies.{" "}
                </p>
              </div>
            </div>
            <div className="accordian-item" id="que3">
              <a className="accordian-link" id="que3">
                What you can expect from Equilibrium 2021?
                <img
                  style={{ width: "30px" }}
                  src="/icons/plus-solid.svg"
                  className="plus"
                />
                <img
                  style={{ width: "30px" }}
                  src="/icons/minus-solid.svg"
                  className="Minus"
                />
              </a>
              <div className="answer">
                <p>
                  Deep Dives in Technologies Rendezvous with experts Networking
                  with similar minds Opportunities for placement, internship and
                  sponsored projects National level recognition Knowledge
                  sharing platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </AboutStyleWrapper>
  );
};

export default About;

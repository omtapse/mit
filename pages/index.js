import Footer from "../containers/Footer";
import Navbar from "../containers/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.herosection}></div>
      <div className={styles.clubSection}>
        <h3>A step towards the dream to learn and grow together</h3>
        <p>
          MITAOE is aimed to create and maintain a safe, healthy, and conducive
          environment and culture that synthesizes the intellectual, technical,
          physical, social, emotional, and ethical development of students in a
          holistic way.
        </p>
        <div className={styles.clubCards}>
           
        <div className={styles.clubCards}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <img src="/clubImages/aero-club.png" className={styles.clubImage} alt="Aero Club"/>
                  <h3>Aero Club</h3>
                </div>
              </div>
            </div>
            </div>
        <div className={styles.clubCards}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <img src="/clubImages/autosport-club-new.png" className={styles.clubImage} alt="Aero Club"/>
                  <h3>Autosport Club</h3>
                </div>
              </div>
            </div>
            </div>
        <div className={styles.clubCards}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <img src="/clubImages/math-club.png" className={styles.clubImage} alt="Aero Club"/>
                  <h3>Math Club</h3>
                </div>
              </div>
            </div>
            </div>
        <div className={styles.clubCards}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <img src="/clubImages/robotics-club.png" className={styles.clubImage} alt="Aero Club"/>
                  <h3>Robotics Club</h3>
                </div>
              </div>
            </div>
            </div>
        <div className={styles.clubCards}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <img src="/clubImages/animix-club.png" className={styles.clubImage} alt="Aero Club"/>
                  <h3>Animix Club</h3>
                </div>
              </div>
            </div>
            </div>
        <div className={styles.clubCards}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <img src="/clubImages/code-chef-new.png" className={styles.clubImage} alt="Aero Club"/>
                  <h3>CodeChef Club</h3>
                </div>
              </div>
            </div>
            </div>
        <div className={styles.clubCards}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <img src="/clubImages/mozilla-club-new.png" className={styles.clubImage} alt="Aero Club"/>
                  <h3>Mozilla Club</h3>
                </div>
              </div>
            </div>
            </div>
        <div className={styles.clubCards}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <img src="/clubImages/spark-club.png" className={styles.clubImage} alt="Aero Club"/>
                  <h3>Spark Club</h3>
                </div>
              </div>
            </div>
            </div>
        <div className={styles.clubCards}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <img src="/clubImages/srujan-club.png" className={styles.clubImage} alt="Aero Club"/>
                  <h3>Srujan Club</h3>
                </div>
              </div>
            </div>
            </div>
        <div className={styles.clubCards}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <img src="/clubImages/google-developer-club.png" className={styles.clubImage} alt="Aero Club"/>
                  <h3>Google Developer Club</h3>
                </div>
              </div>
            </div>
            </div>
        <div className={styles.clubCards}>
            <div className={styles.card}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <img src="/clubImages/club-girlscript.png" className={styles.clubImage} alt="Aero Club"/>
                  <h3>GirlScript Club & ReadX Club</h3>
                </div>
              </div>
            </div>
            </div>
       
           
        </div>
      </div>
      <Footer/>
    </div>
  );
}

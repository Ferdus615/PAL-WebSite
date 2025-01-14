import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.hero}>
        <img src="./images/cover photo.jpg" alt="Cover Photo" loading="lazy" />
        <div className={styles.heroText}>
          <p className={styles.title}>Prime Automations Ltd.</p>
          <p className={styles.slogan}>Sustainability Through Technology</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

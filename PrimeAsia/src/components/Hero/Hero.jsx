import styles from "./Hero.module.css";
import SplitText from "./SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Hero = () => {
  return (
    <div id="home" className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.hero}>
        <img src="./images/cover photo.jpg" alt="Cover Photo" loading="lazy" />
        <div className={styles.heroText}>
          <p className={styles.title}>
            <SplitText
              text="Prime Automations Ltd."
              className="text-2xl font-semibold text-center"
              delay={100}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>
          <p className={styles.slogan}>Sustainability Through Technology</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

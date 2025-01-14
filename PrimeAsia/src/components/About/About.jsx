import Partners from "../Partners/Partners";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about">
      <div className={styles.about}>
        <div className={styles.title}>
          <h2>About US</h2>
        </div>
        <div className={styles.text}>
          <p className={styles.para}>
            With over 25+ years of combined experience, Prime Automations
            Limited (PAL) is pioneering the introduction of the most advanced
            CAD & Cutting-Room Automation Solutions in Bangladesh. PAL aims to
            provide forefront technology solutions to manufacturing & service
            industries, enabling businesses to achieve sustainability in
            competitiveness, profitability, and environmental contexts. PAL’s
            commitment lies in delivering cutting-edge solutions that optimize
            processes, enhance efficiency, and foster growth. Through innovative
            CAD and automation technologies, PAL empowers businesses to thrive
            in a dynamic market landscape, ensuring they remain at the forefront
            of progress while upholding environmental responsibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

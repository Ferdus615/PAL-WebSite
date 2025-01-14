import styles from "./Partners.module.css";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <div>
      <div className={styles.partners}>
        <div className={styles.text}>
          <h2>Our Partners</h2>
        </div>

        <div className={styles.logos}>
          <Marquee pauseOnClick={true} autoFill={true} gradient={true}>
            <img src="./img/logo 1.png" alt="partner logo" loading="lazy" />

            <img src="./img/logo 2.png" alt="partner logo" loading="lazy" />

            <img src="./img/logo 3.png" alt="partner logo" loading="lazy" />

            <img src="./img/logo 4.png" alt="partner logo" loading="lazy" />

            <img src="./img/logo 5.png" alt="partner logo" loading="lazy" />
          </Marquee>

          <Marquee
            pauseOnClick={true}
            autoFill={true}
            gradient={true}
            direction="right"
          >
            <img src="./img/logo 6.png" alt="partner logo" loading="lazy" />

            <img src="./img/logo 7.png" alt="partner logo" loading="lazy" />

            <img src="./img/logo 8.png" alt="partner logo" loading="lazy" />

            <img src="./img/logo 9.png" alt="partner logo" loading="lazy" />

            <img src="./img/logo 10.png" alt="partner logo" loading="lazy" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Partners;

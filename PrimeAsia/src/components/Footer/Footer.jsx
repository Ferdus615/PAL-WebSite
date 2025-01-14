import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section id="footer">
      <footer className={styles.footer}>
        <div className={styles.Name}>
          <p> Prime Automations Ltd.</p>
        </div>
        <div className={styles.info}>
          <p>
            Our company specializes in providing user friendly, top of the line
            machinery and software solutions for the textile manufacturing
            industry. We prioritize building strong, trusting relationships with
            our clients, ensuring we're always readily available to assist.
          </p>
        </div>

        <div className={styles.contactTitle}>
          <p>Contacts</p>
        </div>
        <div className={styles.contacts}>
          <div className={styles.location}>
            <img src="./images/location_black.svg" alt="Location_icon" />
            <p>
              Akash Plaza, Room#501, Plot# 21, Road# 7/D, Dhaka Mymensingh Road,
              Sector : 9, Uttara, Dhaka-1230
            </p>
          </div>

          <div className={styles.phone}>
            <img src="./images/call_black.svg" alt="Call_icon" />
            <p>+88 01730 055224</p>
          </div>

          <div className={styles.email}>
            <img src="./images/email_black.svg" alt="Email_icon" />
            <a href="http://salesdesk.primegroup@gmail.com" target="_blank">
              salesdesk.primegroup@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.socials}>
          <img src="./images/facebook.png" alt="facebook" />
          <a
            href="https://www.facebook.com/primeautomationsltd"
            target="_blank"
          >
            Facebook
          </a>
          <img src="./images/twitter.png" alt="twitter" />
          <a href="https://twitter.com/Prime_ltd_bd" target="_blank">
            X / Twitter
          </a>
          <img src="./images/linkedin.png" alt="linkedin" />
          <a
            href="https://www.linkedin.com/company/primeautomationsltd/"
            target="_blank"
          >
            linkedin
          </a>
          <img src="./images/whatsapp.png" alt="whatsapp" />
          <a href="https://api.whatsapp.com/send?8801769093465" target="_blank">
            WhatsApp
          </a>
          <img src="./images/youtube.png" alt="youtube" />
          <a href="https://www.youtube.com/@primeutomationsltd" target="_blank">
            YouTube
          </a>
        </div>

        <div className={styles.blogLink}>
          <p>Blogs</p>
        </div>
        <div className={styles.blogs}>
          <ul>
            <li>
              <a href="#">- Audaces Supera</a>
            </li>
            <li>
              <a href="#">- Gear Up for ITM 2024</a>
            </li>
            <li>
              <a href="#">- Denim Disaster?</a>
            </li>
          </ul>
        </div>

        <div className={styles.line}></div>

        <div className={styles.copyright}>
          <p>
            &copy; Copyright 2024,
            <br /> All Rights Reserved by Prime Automations Ltd.
          </p>
        </div>

        <div className={styles.chat}>
          <a href="#">Chat with Us</a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

import styles from "./Navigation.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={styles.navi}>
      <div className={styles.naviLogo}>
        <Link to="/">
          <img src="./images/pal logo nav.svg" alt="PAL logo" />
        </Link>
        <p className={styles.name}>Prime Automations Ltd.</p>
      </div>

      <div className={styles.naviLinks}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#products">Products</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#footer">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

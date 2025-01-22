import React from "react";
import styles from "./News.module.css";

const News = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>News</h1>
      <div className={styles.blogContainer}>
        <div className={styles.blogBox}>
          <h3>News Title Here</h3>
          <p>
            The brief preview of the news content goes here so everyone can
            atleast ready something before continuing ....
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;

import React from "react";
import styles from "./Blogs.module.css";

const Blogs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Blogs</h1>
      <div className={styles.blogContainer}>
        <div className={styles.blogBox}>
          <h3>Blog Title Here</h3>
          <p>
            The brief preview of the blog content goes here so everyone can
            atleast ready something before continuing ....
          </p>
          {/* <img src="/News-img.jpg" alt="Blog Imgage" /> */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

import React from "react";
import styles from "../styles/PageWrapper.module.css";

export default function PageWrapper({ children, bgImage }) {
  const style = bgImage ? { backgroundImage: `url(${bgImage})` } : {};
  return (
    <div className={styles.pageWrapper} style={style}>
      {children}
    </div>
  );
}

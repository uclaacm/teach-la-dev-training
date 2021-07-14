import React from "react";
//import "../webpackShenanigans/secondPage.css";
import styles from "../webpackShenanigans/secondPage.module.css";
import "../App.css";

export default function SecondPage() {
  return <div className={styles["the-dress"]}>This is The Second Page!</div>;
}

//Exercise: Try turning this into a pure component with props!

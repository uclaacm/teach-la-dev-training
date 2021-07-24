import React from "react";
import styles from "../webpackShenanigans/firstPage.module.css";
//import "../webpackShenanigans/firstPage.css";
import "../App.css";

export default function FirstPage() {
  return <div className={styles["the-dress"]}>This is The First Page!</div>;
  // <div className = "odd-component">This is The First Page!</div>
}

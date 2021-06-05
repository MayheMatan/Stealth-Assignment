import React from "react";
import styles from "./style.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = () => (
  <div className={styles.loader}>
    <CircularProgress disableShrink />
  </div>
);

export default Loader;

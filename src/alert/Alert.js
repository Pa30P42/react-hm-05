import React from "react";
import styles from "./Alert.module.css";
// import { CSSTransition } from "react-transition-group";

const Alert = ({ alertSwitch }) => {
  return (
    // <TransitionGroup>
    // <CSSTransition
    //   classNames={styles}
    //   in={true}
    //   appear={true}
    //   timeout={1500}
    //   unmountOnExit
    // >
    <div className={styles.alertWrapper}>
      <p>Contact already exist !</p>
      <button onClick={alertSwitch} className={styles.btn}>
        Ok
      </button>
    </div>
    // {/* </CSSTransition> */}
    // </TransitionGroup>
  );
};

export default Alert;

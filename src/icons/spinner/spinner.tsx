import React from 'react';
import styles from "@/icons/spinner/spinner.module.css";

const Spinner = () => {
    return (
        <svg className={styles.spinner} viewBox={"0 0 100 100"}>
            <circle cx={50} cy={50} r={45} />
        </svg>
    );
};

export default Spinner;

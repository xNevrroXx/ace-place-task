"use client";

import React from 'react';
import styles from "@/components/submit-button/submit-button.module.css";
import SearchIcon from "@/icons/search";
import {useFormStatus} from "react-dom";
import Spinner from "@/icons/spinner/spinner";

const SubmitButton = () => {
    const {pending} = useFormStatus();

    return (
        <button
            disabled={pending}
            className={styles.submitBtn}
            title={"Найти"}
            type={"submit"}
        >
            { pending
                ? <Spinner />
                : <SearchIcon className={styles.searchIcon}/>
            }
        </button>
    );
};

export default SubmitButton;

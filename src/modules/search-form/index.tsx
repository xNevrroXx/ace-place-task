"use server";

import {FC} from 'react';
import SubmitButton from "@/components/submit-button";
import {getITN} from "@/actions/get-itn";
import styles from "@/modules/search-form/search-form.module.css";

const SearchForm: FC = () => {

    return (
        <form
            action={getITN}
            className={styles.form}
        >
            <input
                title={"Введите ИНН организации(10 цифр)"}
                className={styles.field}
                name={"ITN"}
                placeholder={"Укажите ИНН"}
                type={"number"}
                min={1000000000}
                max={9999999999}
                required
            />
            <SubmitButton/>
        </form>
    );
};

export default SearchForm;

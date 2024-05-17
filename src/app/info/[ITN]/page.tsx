"use server";

import {FC} from 'react';
import {checkIsOrganization} from "@/models/IOrganization";
import SearchForm from "@/modules/search-form";
import styles from "@/app/info/[ITN]/page.module.css";
import {getOrganizationData} from "@/actions/get-organization-data";

interface IProps {
    params: { ITN: number }
}


const OrganizationInfo: FC<IProps> = async ({params}) => {
    const data = await getOrganizationData(Number(params.ITN));

    if (!checkIsOrganization(data)) {
        return (
            <main className={styles.container}>
                <header>
                    <SearchForm />
                </header>
                <div className={styles.divider}/>
                <h1 style={{textAlign: "center"}}>{params.ITN} - {data.message}.</h1>
            </main>
        )
    }

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <SearchForm />
            </header>
            <div className={styles.divider}/>
            <div className={styles.organizationInfo}>
                <h1>{data.name.short_with_opf || ""}</h1>
                <p>
                    <span>ИНН:&#9;</span>
                    <span>{data.inn}</span>
                </p>
                <p>
                    <span>Основатель:&#9;</span>
                    <span>{data.management.name || ""}</span>
                </p>
                <p>
                    <span>Должность:&#9;</span>
                    <span>{data.management.post || ""}</span>
                </p>
                <p>
                    <span>Адрес:&#9;</span>
                    <span className="ymaps-geolink">{data.address.value || ""}</span>
                </p>
            </div>
        </main>
    );
};

export default OrganizationInfo;

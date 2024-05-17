"use server"

import {validateItn} from "@/utils/validate-itn";
import {redirect} from "next/navigation";

async function getITN(formData: FormData) {
    const ITN = Number(formData.get("ITN"));

    try {
        await validateItn(ITN);
    }
    catch (error) {
        if (error instanceof Error) {
            return {message: error.message};
        }
        return {message: "Неизвестная ошибка"};
    }

    redirect(`/info/${ITN}`);
}

export {getITN};

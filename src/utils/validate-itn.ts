"use server";

/* eslint-disable @typescript-eslint/require-await */

async function validateItn(itn: number) {
    if (isNaN(itn)) {
        throw new Error("ИНН должен содержать только цифры");
    }
    else if (!itn) {
        throw new Error("Введите ИНН");
    }
    else if (itn.toString().length !== 10) {
        throw new Error("ИНН должен содержать 10 цифр");
    }

    return true;
}

export {validateItn};

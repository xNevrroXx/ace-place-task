"use server";

import {IErrorResponse, IOrganization} from "@/models/IOrganization";
import {validateItn} from "@/utils/validate-itn";
import {OrganizationService} from "@/services/organization";

async function getOrganizationData(itn: number): Promise<IOrganization | IErrorResponse> {
    try {
        await validateItn(itn);

        return await OrganizationService.findByITN(itn);
    }
    catch (error) {
        if (error instanceof Error) {
            return {message: error.message};
        }
        return {message: "Неизвестная ошибка"};
    }
}

export {getOrganizationData};

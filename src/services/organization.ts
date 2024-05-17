import {IOrganization, IOrganizationsReturnType} from "@/models/IOrganization";
import {Constants} from "@/config/constants";
import {api} from "@/http";

class OrganizationService {
    public static async findByITN(itn: number): Promise<IOrganization> {
        "use server";

        const options: RequestInit = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + Constants.DADATA_API_KEY
            },
            body: JSON.stringify({query: itn, branch_type: "MAIN"})
        }

        const result = await api<IOrganizationsReturnType>(Constants.DADATA_ENDPOINT, options);

        if (result.suggestions.length === 0) {
            throw new Error("Недействитeльный ИНН");
        }
        return result.suggestions[0].data;
    }
}

export {OrganizationService};

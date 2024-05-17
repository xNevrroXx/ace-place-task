interface IOrganizationsReturnType {
    suggestions: ISuggestion[]
}

interface ISuggestion {
    value: string,
    data: IOrganization,
}

interface IOrganization {
    inn: number,
    name: {
        full_with_opf: string,
        short_with_opf: string,
    },
    fio: {
        name: string,
        surname: string,
        patronymic: string,
    },
    address: {
        value: string,
    },
    management: {
        name: string,
        post: string,
    }
}

interface IErrorResponse {
    message: string,
}

function checkIsOrganization(obj: IOrganization | IErrorResponse): obj is IOrganization {
    const organization = obj as IOrganization;
    return !!organization.inn;
}

export type {IOrganizationsReturnType, ISuggestion, IOrganization, IErrorResponse};
export {checkIsOrganization};

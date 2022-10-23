
export interface CreateSchoolFormDataState {
    initials: string;
    type: string;
    programme: string;
    address: AddressObject;
    head: string;
    moto: string;
    logoImage: File | null;
    logoImagePreviewStr: string;
    name: string;
    activeButton: boolean;
}

export interface AddressObject{
    province:string,
    district:string,
    sector:string,
    cell:string,
    village:string,
}

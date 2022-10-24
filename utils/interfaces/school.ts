
export interface CreateSchoolFormDataState {
    initials: string;
    type: string;
    programme: string[];
    address: AddressObject;
    head: string;
    moto: string;
    admin:AdminObject
    logoImage: File | null;
    previewURL: string | null;
    name: string;
    activeButton: boolean;
    previewImage:boolean
}

export interface AdminObject{
    names:string,
    code:string,
    email:string,
    tel:string,
    password:string
    showPassword:boolean

}

export interface AddressObject{
    province:string,
    district:string,
    sector:string,
    cell:string,
    village:string,
}

export interface FileData {
    students: Array<unknown>,
    fileName: string,
    timeUploaded: string,
    isFileUploaded: boolean,
    errorState: boolean,
    errorMessage: string,
    loading: boolean,
    sheets: Number,
    // __cTag: any
}

export interface EducatorFileData {
    educators: Array<unknown>,
    fileName: string,
    timeUploaded: string,
    isFileUploaded: boolean,
    errorState: boolean,
    errorMessage: string,
    loading: boolean,
    sheets: Number,
    __cTag: any

}


export interface MeantForInterface {
    name: string,
    value: string
}


export interface AnnouncementObject {
    content: string
    postedBy:string,
    posted:number
    heading: string,

}

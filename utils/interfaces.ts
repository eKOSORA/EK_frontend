export interface FileData {
    students: Array<unknown>,
    fileName: string,
    timeUploaded: string,
    isFileUploaded: boolean,
    errorState: boolean,
    errorMessage: string,
    loading: boolean
    sheets:Number

}

export interface EducatorFileData{
    educators: Array<unknown>,
    fileName: string,
    timeUploaded: string,
    isFileUploaded: boolean,
    errorState: boolean,
    errorMessage: string,
    loading: boolean
    sheets:Number

}

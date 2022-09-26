export interface FileData {
    students: Array<unknown>,
    fileName: string,
    timeUploaded: string,
    isFileUploaded: boolean,
    errorState: boolean,
    errorMessage: string,
    loading: boolean

}

export interface EducatorFileData{
    educators: Array<unknown>,
    fileName: string,
    timeUploaded: string,
    isFileUploaded: boolean,
    errorState: boolean,
    errorMessage: string,
    loading: boolean
}

export type IUploadStudentsInterface = {
    sheets: Number,
    students: Array<Array<uploadedStudentObject>>
}

export interface uploadedStudentObject {
    'First Name': String
    'Last Name': String
    'Code/ID': String
    'Year/Grade': String
    'Class': String
    'Parent Email(s)': Array<String>
    'Parent Tel(s)': Array<Number>
}


export interface AddStudentFormData {
    name: string;
    code: string;
    class: string;
    email: string;
    parentEmails: Array<string>,
    year: number,
}

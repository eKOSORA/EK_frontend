export type IUploadStudentsInterface = {
    sheets: Number,
    students: Array<uploadedStudentObject>
}

interface uploadedStudentObject {
    'First Name': String
    'Last Name': String
    'Code/ID': String
    'Year/Grade': String
    'Class': String
    'Parent Email(s)': Array<String>
    'Parent Tel(s)': Array<Number>
}

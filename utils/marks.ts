interface ClassObject {
    name: string,
    value: string
}
interface CourseObject {
    name: string,
    value: string,
    availableForClass: Array<String>,
    availableForTeacher: Array<String>
}
export const classes: Array<ClassObject> = [
    {
        name: "Year 1 A",
        value: 'year1a'
    },
    {
        name: "Year 1 B",
        value: 'year1b'
    },
    {
        name: "Year 2 A",
        value: 'year2a'
    },
    {
        name: "Year 2 B",
        value: 'year2b'
    },
    {
        name: "Year 3 A",
        value: 'year3a'
    },
    {
        name: "Year 3 B",
        value: 'year3b'
    },
]
export const courses: Array<CourseObject> = [
    {
        name: "Fundamentals Of Programming",
        value: 'fundamentals_of_programming',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },
    {
        name: "Web Development with  PHP",
        value: 'web_develpment_with_php',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },
    {
        name: "Basics of Networking",
        value: 'basics_of_networking',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },
    {
        name: "Basics of database development",
        value: 'basics_of_database_development',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },
    {
        name: "Mathematics",
        value: 'year3a',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },
    {
        name: "Physics",
        value: 'year3b',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },{
        name: "English",
        value: 'year3b',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },{
        name: "Embedded Systems",
        value: 'year3b',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },{
        name: "Web Development with HTML and CSS",
        value: 'year3b',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },{
        name: "Web Development with Javascript ",
        value: 'year3b',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },{
        name: "Data structures and Algorithms",
        value: 'year3b',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },{
        name: "Fundamentals of Database",
        value: 'year3b',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },{
        name: "Graphical User Interface Development",
        value: 'year3b',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },{
        name: "Discipline",
        value: 'year3b',
        availableForClass: ['year1a', 'year1b', 'year3a', 'year3b'],
        availableForTeacher: ['year1a', 'year1b', 'year3a', 'year3b']
    },
]

export const registeredMarks: any = [{
    "studentId": "622905d4c931a6ccb74f4ead",
    "studentName": "AMIZERO IRIZA PEACE MARY", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": 3, "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4eae",
    "studentName": "AMIZERO NSABIMANA Peace Thierry Tresor", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": 14, "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4eaf",
    "studentName": "BIGWI SHYAKA Valentin", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": 29, "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4eb0",
    "studentName": "BIRAMAHIRE Dan Bellamy", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4eb2",
    "studentName": "BUGINGO Elua", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4eb6",
    "studentName": "GAKUBA Edmond", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4eb7",
    "studentName": "GISINGIZO GLORIA", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4eb8",
    "studentName": "HIRWA GACURABWENGE Vanessa", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ebb",
    "studentName": "INEZA Axelle", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ebc",
    "studentName": "INGABIRE Divine", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ebd",
    "studentName": "IRADUKUNDA Mustafa", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ebf",
    "studentName": "IRATUZI JEHOVA TSIKENI", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ec3",
    "studentName": "ISHIMWE NDUNGUTSE CHARLES", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ec2",
    "studentName": "ISHIMWE Vainqueur", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ec6",
    "studentName": "KABANDA MANZI Cedrick", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ec9",
    "studentName": "KARIGIRWA Sonia Olga", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4eca",
    "studentName": "MAJURA Anthony Gaudence", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "6256aca7e6905c8a99aac752",
    "studentName": "MANISHIMWE YVETTE", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ece",
    "studentName": "MUGISHA DORCUS", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ecd",
    "studentName": "MUGISHA PRECIEUX", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ed1",
    "studentName": "MUTUYIMANA JOYEUSE RITA", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ed4",
    "studentName": "NDAYISHIMIYE GILBERT", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4edb",
    "studentName": "NKUBITOYIMANZI RUTH", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ede",
    "studentName": "RUKUNDO HONORE", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4edf",
    "studentName": "RUTAGENGWA ASANTE BRUCE", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ee2",
    "studentName": "UMUGWANEZA ANAISE", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ee1",
    "studentName": "UMUGWANEZA Alice", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ee3",
    "studentName": "UMUTONI MIREILLE", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ee5",
    "studentName": "UNYUZIMFURA ISHIMWE JOY KEVIN", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}, {
    "studentId": "622905d4c931a6ccb74f4ee8",
    "studentName": "UWIRINGIYIMANA MARTHE", "records": [{ "_id": "6310e2e92a7694134fee9787", "recordName": "WUI Surprise Quiz", "date": 1661990400000, "mark": "30", "max": 30, "subject": "WUI", "reversed": true }]
}]

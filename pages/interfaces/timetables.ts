export interface HourObject {
    from: string,
    to: string,
}

export interface LessonObject {
    name: string,
    educator: string,
    from: number,
    to: number
}
export interface LessonInTimeTableObject {

    name: string,
    from: string,
    to: string,
    initial: string,
    educator: string,
}
export interface TimeTableObject {
    name: string,
    monday: LessonInTimeTableObject[],
    tuesday: LessonInTimeTableObject[],
    wednesday: LessonInTimeTableObject[],
    thursday: LessonInTimeTableObject[],
    friday: LessonInTimeTableObject[],
    saturday: LessonInTimeTableObject[],
    sunday: LessonInTimeTableObject[],
}

export interface EditModeObject {
    state: boolean,
    index: any
}


export interface TimeTableViewObject {
    name: string,
    lastEdited: string,
    imageUrl:string
}

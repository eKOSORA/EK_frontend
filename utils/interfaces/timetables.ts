export interface HourObject {
  id: string;
  from: string;
  to: string;
  fromPicker:string
  toPicker:string
}

export interface LessonObject {
  id: string;
  name: string;
  educator: string;
  numberofHours: number;
  initial: string;
}
export interface LessonInTimeTableObject {
  index?: number;
  name: string;
  from: string;
  to: string;
  initial: string;
  educator: string;
}
export interface TimeTableObject {
  name: string;
  days: DaysObject;
}
export interface DaysObject {
  monday: LessonInTimeTableObject[];
  tuesday: LessonInTimeTableObject[];
  wednesday: LessonInTimeTableObject[];
  thursday: LessonInTimeTableObject[];
  friday: LessonInTimeTableObject[];
  saturday: LessonInTimeTableObject[];
  sunday: LessonInTimeTableObject[];
}
export interface EditModeObject {
  state: boolean;
  index: any;
}

export interface TimeTableViewObject {
  name: string;
  lastEdited: string;
  imageUrl: string;
}

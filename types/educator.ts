export interface AddEducatorInterface {
  names: string;
  code: string;
  title: string[];
  tel: string;
  email: string;
  subjects: string[];
}

export interface EducatorObject {
  firstName: string;
  lastName: string;
  code: string;
  email:string;
  lessons: string[];
  IdNumber: string|null;
  telephone: string|null;
}

export enum Gender {
  m = 'm',
  f = 'f',
  u = 'u',
}

export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  age?: number;
  gender: Gender;
}

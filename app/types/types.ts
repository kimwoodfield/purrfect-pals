export interface CatGroup {
    gender: string;
    pets: Pet[];
  }

  export enum Gender {
    Male = "Male",
    Female = "Female",
  }

  export type CatOwnerContainerProps = {
    catGroup: CatGroup[];
  };

  export interface PetOwner {
    name: string;
    gender: string;
    age: number;
    pets: Pet[] | null;
  }
  
export interface Pet {
    name: string;
    type: PetType;
  }

export type PetType = 'Cat' | 'Dog' | 'Fish';

export enum PetOptions {
    Cat = 'Cat',
    Dog = 'Dog',
    Fish = 'Fish'
}
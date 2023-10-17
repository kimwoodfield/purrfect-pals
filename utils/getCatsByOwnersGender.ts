import { Gender, Pet, PetOptions, PetOwner } from "@/app/types/types";

export const getCatsByOwnersGender = (owners: PetOwner[], gender: Gender) => {
    if (!owners?.length) {
      return {
        gender,
        pets: [],
      };
    }
    
    const cats = owners
      .filter((owner: PetOwner) => owner.gender === gender && owner.pets)
      .flatMap( 
        (owner: PetOwner) =>
          owner.pets?.filter((pet: Pet) => pet.type === PetOptions.Cat) ?? []
      );
  
    return {
      gender,
      pets: cats,
    };
  };
  
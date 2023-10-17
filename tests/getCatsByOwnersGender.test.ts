import { getCatsByOwnersGender } from "@/utils/getCatsByOwnersGender";
import "@testing-library/jest-dom";
import { Gender, PetOptions, PetOwner } from "@/app/types/types";

describe("Get cats by the owners gender", () => {
    const petOwners: PetOwner[] = [
        {
          name: "Bob",
          gender: Gender.Male,
          age: 23,
          pets: [
            {
              name: "Garfield",
              type: PetOptions.Cat,
            },
            {
              name: "Fido",
              type: PetOptions.Dog,
            },
          ],
        },
      ];

    it("returns object with male gender no pets when none are passed", () => {
      expect(getCatsByOwnersGender([], Gender.Male)).toStrictEqual({
        gender: Gender.Male,
        pets: []
      })
    });

    it("returns object with female gender no pets when none are passed", () => {
        expect(getCatsByOwnersGender([], Gender.Female)).toStrictEqual({
          gender: Gender.Female,
          pets: []
        })
      });

      it("returns object with female gender no pets when none are passed", () => {
        expect(getCatsByOwnersGender(petOwners, Gender.Male)).toStrictEqual({
            gender: Gender.Male,
            pets: [
              {
                name: "Garfield",
                type: PetOptions.Cat,
              },
            ],
          });
      }); 
  });
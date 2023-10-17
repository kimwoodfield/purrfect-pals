import { PetOwner } from "@/app/types/types";

export const getPetOwners = async(): Promise<PetOwner[]> => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json');
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('failed to fetch data from endpoint');
      return [];
    }
  }
"use client";

import { useState, useEffect } from "react";
import { getPetOwners } from "../utils/getPetOwners";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import CatGroupContainer from "@/components/CatGroupContainer";
import { getCatsByOwnersGender } from "@/utils/getCatsByOwnersGender";
import { Gender, PetOwner } from "./types/types";

export default function Home() {
  const [data, setData] = useState<PetOwner[]>([]);
  const [isSpinning, setIsSpinning] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const owners = await getPetOwners();
      setData(owners);
      setIsSpinning(false);
    };

    getData();
  }, []);

  const catsFromFemaleOwners = getCatsByOwnersGender(data, Gender.Female);
  const catsFromMaleOwners = getCatsByOwnersGender(data, Gender.Male);

  return (
    <main>
      <div className="p-10">
        <Header>purrfect pals</Header>
        {isSpinning && <Spinner />}
        {data && data.length ? (
          <CatGroupContainer
            catGroup={[catsFromMaleOwners, catsFromFemaleOwners]}
          />
        ) : (
          []
        )}
      </div>
    </main>
  );
}

import { Pet } from "@/utils/getPetOwners";
import { v4 as uuidv4 } from 'uuid'
import { Fragment } from "react";
import CatCard from "./CatCard";


export default function CatList({ pets }: { pets: Pet[] }) {
  return (
    <div>
        <ul>
            {pets?.filter(pets => pets.type === 'Cat').map((cat: Pet) => (
                <Fragment key={uuidv4()}>
                    <CatCard {...cat} />
                </Fragment>
                ))}
        </ul>
    </div>
  );
}

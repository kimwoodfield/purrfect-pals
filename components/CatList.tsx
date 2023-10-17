import { Pet } from '@/app/types/types';
import { v4 as uuidv4 } from 'uuid'
import { Fragment } from "react";
import CatCard from "./CatCard";

export default function CatList({ pets }: { pets: Pet[] }) {
  return (
    <div>
        <ul>
            {pets?.map((cat: Pet) => (
                <Fragment key={uuidv4()}>
                    <CatCard {...cat} />
                </Fragment>
                ))}
        </ul>
    </div>
  );
}

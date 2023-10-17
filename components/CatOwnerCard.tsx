import { v4 as uuidv4 } from "uuid";
import CatList from "./CatList";
import Image from "next/image";
import { CatGroup, Gender } from "@/app/types/types";

export default function CatOwnerCard(catGroup: CatGroup) {
  const { gender, pets } = catGroup;

  return (
    <div key={uuidv4()} className="w-60 mb-16 text-center px-5">
      <h2 className="text-3xl mb-4">{gender}</h2>
      <div className='h-56'>
        <Image
          src={gender === Gender.Male ? '/male-cat.jpg' : '/female-cat.jpg'}
          priority={true}
          width={500}
          height={500}
          alt={`A ${gender} cat`}
          className='rounded-xl'
        />
      </div>
      <CatList pets={pets ? pets : []} />
    </div>
  );
}

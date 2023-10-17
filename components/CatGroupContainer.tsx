import CatOwnerCard from "./CatOwnerCard";
import { v4 as uuidv4 } from 'uuid'
import { CatGroup, CatOwnerContainerProps } from "@/app/types/types";

export default function CatOwnerContainer({
  catGroup,
}: CatOwnerContainerProps) {
  return (
    <div className='flex flex-col items-center justify-center align-center w-full md:flex-row md:items-start md:mb-0'>
      {catGroup?.length &&
        catGroup.map((catGroup: CatGroup) => {
            // Ideally, we would rely on the 
            // catOwner's id here, but since 
            // we don't have one, we'll use uuidv4
          return <CatOwnerCard key={uuidv4()} {...catGroup} />;
        })}
    </div>
  );
}
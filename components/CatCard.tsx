import { Pet } from "@/utils/getPetOwners";
import { v4 as uuidv4 } from 'uuid'

export default function CatCard({ name }: Pet) {
    return <li key={uuidv4()}>{name}</li>
}
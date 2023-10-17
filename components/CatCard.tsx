import { Pet } from '@/app/types/types'
import { v4 as uuidv4 } from 'uuid'

export default function CatCard({ name }: Pet) {
    return <li key={uuidv4()}>{name}</li>
}
import { User } from './User'

export interface History {
  "searchTerm": string,
  "userData": User | null
}
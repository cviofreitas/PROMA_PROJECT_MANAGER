import { Project } from "./project.model"

export interface Client{
    id: number
    customerName: CustomerName
    address?: Address
    phoneNum?: string
    email?: string
    projects: Project[] | []
}
  
  export interface CustomerName {
    last: string
    first: string
  }
  
  export interface Address {
    street: string
    city: string
    state: string
    zipCode: string
  }
  
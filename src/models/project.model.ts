

export interface Project {
    projectName: string
    invoiceId: number
    services: Service[]
    sentDate: DateObject
    dueDate: DateObject
    paid: number
    images: any[]
}

  
  export interface Service {
    id: number
    service: string
    description: string
    qty: number
    rate: number
  }
  
  export interface DateObject {
    day? : number;
    $D?: number;
    month?: number;
    $M?: number;
    year?: number;
    $y?: number;
  }
  
 
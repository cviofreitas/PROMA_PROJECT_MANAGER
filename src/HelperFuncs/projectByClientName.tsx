import { Client } from "../models/client.model"

type SelectedClient ={
    label: string;
    id: number
}

const projectByClientName = (clients:Client[], selectedClient:SelectedClient):Client[] => {
    return clients.filter(client => client.id == selectedClient.id)
}

export default projectByClientName
import { Client } from "../models/client.model"

function useNewClientId(clients:Client[]):number {

    let lastClient = clients.slice(-1)

    let newId = lastClient[0].id + 1
    return newId
}

export default useNewClientId
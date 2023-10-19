import { Client } from "../models/client.model";

const displayByInvoiceNumber = (clients: Client[]):Client[] => {
    let filteredArray:Client[] = [];
    clients.forEach((client) => {
        client?.projects?.forEach((project) => {
            filteredArray.push({
                ...client,
                projects: [project]
            })
        });
    });

    filteredArray.sort((a:Client, b:Client) => b.projects[0].invoiceId - a.projects[0].invoiceId)

    return filteredArray
}

export default displayByInvoiceNumber
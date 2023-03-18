const projectByClientName = (clients, selectedClient) => {
    return clients.filter(client => client.id == selectedClient.id)
}

export default projectByClientName
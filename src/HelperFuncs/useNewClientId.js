function useNewClientId(clients) {

    let lastClient = clients.slice(-1)

    let newId = lastClient[0].id + 1
    return newId
}

export default useNewClientId
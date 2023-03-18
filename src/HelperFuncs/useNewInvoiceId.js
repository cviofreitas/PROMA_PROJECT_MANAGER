function useNewInvoiceId(clients) {

    let invoiceIdArray = []

    clients.forEach((client) => {
        client.projects.forEach((project) => {
            invoiceIdArray.push(
                project.invoiceId
            )
        });
    });
    invoiceIdArray.sort((a, b) => a - b)
    let lastInvoiceId = invoiceIdArray.slice(-1)
    let newInvoiceId = lastInvoiceId[0] + 1

    return newInvoiceId
}

export default useNewInvoiceId
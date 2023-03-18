const displayByInvoiceNumber = (clients) => {
    let emptyArray = [];
    clients.forEach((client) => {
        client.projects.forEach((project) => {
            emptyArray.push({
                ...client,
                projects: [project]
            })
        });
    });

    emptyArray.sort((a, b) => b.projects[0].invoiceId - a.projects[0].invoiceId)

    return emptyArray
}

export default displayByInvoiceNumber

const paidProjects = (clients) => {

    const filteredArray = []

    clients.forEach(client => client.projects.forEach(project => {

        // get project total
        let projectTotal = project.services.map(({ qty, rate }) => rate * qty).reduce((value, total) => value + total, 0)

        const balance = projectTotal - project.paid



        if (balance <= 0) {
            filteredArray.push({
                ...client,
                projects: [project]
            })
        }


    }))
    return filteredArray
}

export default paidProjects
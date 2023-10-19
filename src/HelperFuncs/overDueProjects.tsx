import { Client } from "../models/client.model";
import { DateObject } from "../models/project.model";
const overDueProjects = (clients: Client[]):Client[] => {

    const filteredArray:Client[] = []

    // this will be used to check project dates and determine their status

    let today = new Date();

    const currentDate = {
        day: today.getDate(),
        month: today.getMonth() + 1,
        year: today.getFullYear(),
    }

    function numericalDate(date:DateObject):number {
        let dd = String(date.day).padStart(2, '0');
        let mm = String(date.month).padStart(2, '0');
        let yyyy = String(date.year);

        let result:string|number = yyyy + mm + dd
        result = +result
        return result
    }

    clients.forEach(client => client?.projects?.forEach(project => {

        // get project total
        let projectTotal = project.services.map(({ qty, rate }) => rate * qty).reduce((value, total) => value + total, 0)

        const balance = projectTotal - project.paid

        let isOverdue = false

        if (numericalDate(currentDate) >= numericalDate(project.dueDate)) {
            isOverdue = true
        }

        if (isOverdue && balance > 0) {
            filteredArray.push({
                ...client,
                projects: [project]
            })
        }


    }))
    return filteredArray
}

export default overDueProjects
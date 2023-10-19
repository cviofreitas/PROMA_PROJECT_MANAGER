import { Project } from "../models/project.model"
function projectTotal(project:Project):number {
    return project.services.map(({ qty, rate }) => rate * qty).reduce((value, total) => value + total, 0)
}

export default projectTotal
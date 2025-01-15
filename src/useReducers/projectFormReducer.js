import projectActions from "../LocalData/projectActions"

const {
    updateDueDate,
    updateSentDate,
    updateProjectName,
    updateServices,
    updateAmountPaid } = projectActions

const projectFormReducer = (state, action) => {
    switch (action.type) {
        case updateSentDate:
            console.log('active')
            return {
                ...state,
                sentDate: {
                    ...state.sentDate, [action.name]: [action.value][0]
                }
            }
        case updateDueDate:
            console.log('active')
            return {
                ...state,
                dueDate: {
                    ...state.dueDate, [action.name]: [action.value][0]
                }
            }
        case updateProjectName:
            return {
                ...state,
                projectName: [action.value][0]
            }
        case updateServices:
            return {
                ...state,
                services: [...state.services, [action.value][0]]
            }
        case updateAmountPaid:
            return {
                ...state,
                paid: [action.value][0]
            }
        default:
            return {
                state
            }
    }
}

export default projectFormReducer
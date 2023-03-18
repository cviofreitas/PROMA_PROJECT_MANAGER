import { createSlice } from "@reduxjs/toolkit";
import userData from "../../LocalData/userData";

const initialState = userData.clients

export const clientsSlice = createSlice({
    name: 'Clients',
    initialState,
    reducers: {
        updateClientInfo: (state, action) => {
            return state.map((client) => {
                if (client.id === action.payload.id) {
                    return action.payload
                } else return client
            })
        },
        updateProjectService: (state, action) => {
            return state.map((client) => {
                if (client.id == action.payload.clientId) {
                    return {
                        ...client,
                        projects: client.projects.map(project => {
                            if (project.invoiceId == action.payload.projectId) {
                                return {
                                    ...project,
                                    services: project.services.map((service) => {
                                        if (service.id == action.payload.serviceId) {
                                            return {
                                                id: action.payload.serviceId,
                                                service: action.payload.service,
                                                description: action.payload.description,
                                                qty: action.payload.qty,
                                                rate: action.payload.rate
                                            }
                                        } else return service
                                    }
                                    )
                                }
                            } else return project
                        }),
                    }
                }
                else return client
            })
        },
        addProjectService: (state, action) => {
            return state.map((client) => {
                if (client.id == action.payload.clientId) {
                    return {
                        ...client,
                        projects: client.projects.map(project => {
                            if (project.invoiceId == action.payload.projectId) {
                                return {
                                    ...project,
                                    services: [...project.services,
                                    {
                                        id: action.payload.serviceId,
                                        service: action.payload.service,
                                        description: action.payload.description,
                                        qty: action.payload.qty,
                                        rate: action.payload.rate
                                    }
                                    ]
                                }
                            }
                            else return project
                        }),
                    }
                }
                else return client
            })
        },
        deleteProjectService: (state, action) => {
            return state.map((client) => {
                if (client.id == action.payload.clientId) {
                    return {
                        ...client,
                        projects: client.projects.map(project => {
                            if (project.invoiceId == action.payload.projectId) {
                                return {
                                    ...project,
                                    services: project.services.filter(service =>
                                        service.id != action.payload.serviceId
                                    )
                                }
                            } else return project
                        }),
                    }
                }
                else return client
            })
        },
        updateProjectInfo: (state, action) => {
            return state.map((client) => {
                if (client.id == action.payload.clientId) {
                    return {
                        ...client,
                        projects: client.projects.map(project => {
                            if (project.invoiceId == action.payload.projectId) {
                                return {
                                    ...project,
                                    projectName: action.payload.projectName,
                                    dueDate: action.payload.dueDate,
                                    sentDate: action.payload.sentDate,
                                    paid: action.payload.paid
                                }
                            } else return project
                        }),
                    }
                }
                else return client
            })
        },
        createNewClientInvoice: (state, action) => {
            return [...state, action.payload]
        },
        createExistingClientInvoice: (state, action) => {

            return state.map((client) => {
                if (client.id == action.payload.id) {
                    return {
                        ...client,
                        projects: [...client.projects, action.payload.projects[0]]
                    }

                } else {
                    return client
                }
            })


            // return [...state, action.payload]
        },

    }
})

export const {
    updateClientInfo,
    updateProjectService,
    addProjectService,
    deleteProjectService,
    updateProjectInfo,
    createNewClientInvoice,
    createExistingClientInvoice } = clientsSlice.actions
export default clientsSlice.reducer
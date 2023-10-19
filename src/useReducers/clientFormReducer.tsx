import clientActions from "../LocalData/clientActions"

const {
    updateClientAddress,
    updateClientEmail,
    updateClientName,
    updateClientPhoneNumber,
    useExistingClient,
    resetForm } = clientActions

const clientFormReducer = (state, action) => {
    switch (action.type) {
        case updateClientName:
            return {
                ...state,
                customerName: {
                    ...state.customerName, [action.name]: [action.value][0]
                }
            }
        case updateClientAddress:
            return {
                ...state,
                address: {
                    ...state.address, [action.name]: [action.value][0]
                }
            }
        case updateClientEmail:
            return {
                ...state,
                email: [action.value][0]
            }
        case updateClientPhoneNumber:
            return {
                ...state,
                phoneNum: [action.value][0]
            }

        case useExistingClient:
            return action.value[0];
        case resetForm:
            return action.value[0];

    }
}

export default clientFormReducer
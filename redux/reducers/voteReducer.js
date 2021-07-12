import * as types from '../types'

const initialState = {
    employees: [],
    loading: false,
    error: null,
}

export const voteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            }
        case types.VOTE_EMPLOYEE:

            const employeeId = action.payload
            const tempEmployees = [...state.employees]
            const e = tempEmployees.findIndex(emp => emp.id === employeeId)
            tempEmployees[e].voteCount += 1


            return {
                ...state,
                employees: tempEmployees,
                loading: false,
                error: null,
            }
        default:
            return state
    }
}
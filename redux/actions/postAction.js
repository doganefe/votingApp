import * as types from '../types'
import { gql } from "@apollo/client";
import client from '../../apollo-client'

export const saveEmployees = (employees) => async dispatch => {
    dispatch({
        type: types.SAVE_EMPLOYEES,
        payload: employees
    })
}

export const voteEmployee = (id) => async dispatch => {

    //graphql mutation'i burada yapılacak


    // const { data } = await client.mutate({
    //     mutation: gql`
    //     mutation ($id : ID!) {
    //         voteEmployee (id :"${id}", voteCount: "5555") {
    //             id
    //             firstName
    //             lastName
    //             imgSrc
    //             address
    //             phoneNumber
    //             position
    //         }
    //     }
    //   `,
    // })


    //local state'de oy sayısını arttır.
    // console.log(`id`, id)

    dispatch({
        type: types.VOTE_EMPLOYEE,
        payload: id
    })


}

import React from 'react'
// import { gql } from "@apollo/client";
// import client from '../../apollo-client'
import { useSelector } from 'react-redux'
function Employee({ id }) {
    const { employees } = useSelector(state => state.vote)
    // const { employee } = data
    const emp = employees.filter(e => e.id === id)[0]
    console.log(`emp`, emp)
    return (
        <div className="employee_detail">
            <h3>{emp.firstName} {emp.lastName}</h3>
            <p>Pozisyon : {emp.position}</p>
            <p>Oy sayısı : {emp.voteCount}</p>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    // console.log(`id`, id)
    // const { data } = await client.query({
    //     query: gql`
    //     query {
    //         employee (id : "${id}") {
    //             id
    //             firstName
    //             lastName
    //             imgSrc
    //             address
    //             phoneNumber
    //             position
    //         }
    //     }
    //     `,
    // })
    // return {
    //     props: {
    //         data
    //     }
    // }

    return {
        props: {
            id
        }
    }
}

export default Employee
import React from 'react'
import EmployeeCard from '../Employee/EmployeeCard'
import styles from './EmployeeList.module.scss'
import { useDispatch } from 'react-redux'
import { voteEmployee } from '../../redux/actions/postAction'

function EmployeeList({ employees }) {

    const dispatch = useDispatch()

    const vote = (id) => {
        //graphql mutation is gonna be made here 
        dispatch(voteEmployee(id))
    }
    console.log(`employees`, employees)

    return (
        <div className={styles.employeeList}>
            {
                employees.map((user) => {
                    return <EmployeeCard key={user.id} employee={user} vote={() => vote(user.id)} />
                })
            }
        </div>
    )
}

export default EmployeeList

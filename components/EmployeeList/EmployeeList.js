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
    const sortedList = [...employees].sort((a, b) => (a.voteCount > b.voteCount) ? 1 : -1).reverse()
    return (
        <div className={styles.employeeList}>
            {
                sortedList.map((user) => {
                    return <EmployeeCard key={user.id} employee={user} vote={() => vote(user.id)} />
                })
            }
        </div>
    )
}

export default EmployeeList

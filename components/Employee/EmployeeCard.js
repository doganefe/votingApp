import React from 'react'
import styles from './EmployeeCard.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `${src}}`
  }

function EmployeeCard({ employee, vote }) {
    const router = useRouter()

    const goToDetails = (e) => {
        e.preventDefault()
        router.push(`/employees/${employee.id}`)
    }

    return (
        <div className={styles.employeeCard} >
            <Image
                onClick={goToDetails}
                className={styles.employeeCard__img}
                src={employee.imgSrc}
                alt="1.jpg"
                loader={myLoader}
                width={999}
                height={999}
            />

            <div onClick={goToDetails} className={styles.employeeCard__nameInfo}>
                <p>{employee.firstName} {employee.lastName}</p>
            </div>

            <div className={styles.employeeCard__col1}>
                <p>{employee.position}</p>
                <p>{employee.voteCount}</p>
                <button onClick={vote}>Oy ver!</button>
            </div>
        </div>
    )
}

export default EmployeeCard

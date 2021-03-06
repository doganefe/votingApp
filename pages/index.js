import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import EmployeeList from '../components/EmployeeList/EmployeeList'
import { gql } from '@apollo/client'
import client from '../apollo-client'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import * as types from '../redux/types'

export default function Home({ data }) {
    const { employees } = useSelector(state => state.vote)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: types.SAVE_EMPLOYEES,
            payload: data.allEmployees
        })
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Voting App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>Oy verme uygulaması</h1>
                <h4>İşte çalışanlarımız</h4>
                <EmployeeList employees={employees} />
            </main>
        </div>
    )
}


export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
        {
            allEmployees {
              id
              firstName
              lastName
              position
              imgSrc
              voteCount
            }
          }
      `,
    });

    return {
        props: {
            data,
        },
    };
}
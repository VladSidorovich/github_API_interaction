import React, { useContext } from 'react'
import {Search} from '../components/Search'
import {Card} from '../components/Card'
import {GithubContext} from '../context/github/githubContext'

export const Home = () => {
    const {loading, users} = useContext(GithubContext)

    return (
        <div>
            <Search />

            <div className="row">
                {loading 
                    ? <p className="text-center"> Загрущка ... </p>
                    : users.map(user => {
                        return (
                            <div className="col-sm-4 mb-4" key={card}>
                                <Card />
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

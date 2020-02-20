import React from 'react'
import {Search} from '../components/Search'
import {Card} from '../components/Card'
import {GithubContext} from '../context/github/githubContext'

export const Home = () => {
    useContext(contextValue)

    return (
        <div>
            <Search />

            <div className="row">
                {cards.map(card => {
                    return (
                        <div className="col-sm-4 mb-4" key={card}>
                            <Card />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

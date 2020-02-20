import React, { useContext } from 'react'
import { GithubContext } from '../context/github/githubContext'

export const Profile = ({match}) => {
    const github = useContext(GithubContext)

    return (
        <div>
            <h1> Profile </h1>
        </div>
    )
}

import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../context/github/githubContext'

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
    const name = match.params.name

    useEffect(() => {
        getUser(name)
        getRepos(name)
    }, [])

    if (loading) {
        return <p className={text-center}>Загрузка...</p>
    }
    return (
        <div>
            <h1> Profile </h1>
        </div>
    )
}

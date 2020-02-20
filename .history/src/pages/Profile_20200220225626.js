import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../context/github/githubContext'
import { Link } from 'react-router-dom'

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
    const name = match.params.name

    useEffect(() => {
        getUser(name)
        getRepos(name)
    }, [])

    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }

    const {} = user

    return (
        <>
            <Link to="/" className="btn btn-link"> На главную</Link>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3 text-center">
                        <img src="" alt=""/>
                        <h1> Name </h1>
                    </div>
                </div>
            </div>
        </>
    )
}
